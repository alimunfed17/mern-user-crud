import { useParams } from "react-router-dom"
import AddUser from "./AddUser"
import EditUser from "./EditUser"

export default function AddEditUser() {
  const { id } = useParams()

  return id ? <EditUser /> : <AddUser />
}

