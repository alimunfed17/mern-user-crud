import { createObjectCsvWriter } from "csv-writer";
import path from "path";
import { IUser } from "../models/User";

export const exportUsersToCSV = async (users: IUser[]) => {
  const filePath = path.join(__dirname, "../../exports/users.csv");

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: "_id", title: "ID" },
      { id: "name", title: "Name" },
      { id: "email", title: "Email" },
      { id: "phone", title: "Phone" },
      { id: "address", title: "Address" }
    ]
  });

  await csvWriter.writeRecords(users);
  return filePath;
};
