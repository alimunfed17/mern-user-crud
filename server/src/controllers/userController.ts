import { Request, Response } from "express";
import User from "../models/User";
import { parse } from "json2csv";

// ----------- Create User -----------
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// ----------- Get User by ID -----------
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ----------- Update User -----------
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// ----------- Delete User -----------
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ----------- Get Users with Pagination -----------
export const getUsers = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, q = "" } = req.query;

    const query = q ? { name: { $regex: q as string, $options: "i" } } : {};

    const users = await User.find(query)
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const total = await User.countDocuments(query);

    res.json({
      users,
      total,
      page: +page,
      pages: Math.ceil(total / +limit),
      hasNext: +page < Math.ceil(total / +limit),
      hasPrev: +page > 1,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ----------- Export Users as CSV -----------
export const exportUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found to export" });
    }

    // Define fields to include in CSV
    const fields = ['_id', 'name', 'email', 'phone'];
    const csv = parse(users, { fields });

    // Send CSV directly to client
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
    res.status(200).send(csv);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
