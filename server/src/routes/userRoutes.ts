import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  exportUsers
} from "../controllers/userController";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/export", exportUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
