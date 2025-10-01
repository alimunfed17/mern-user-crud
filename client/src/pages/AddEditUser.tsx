import { useParams } from "react-router-dom"
import AddUser from "../components/AddEditUsers/AddUser"
import EditUser from "../components/AddEditUsers/EditUser";

export default function AddEditUser() {
  const { id } = useParams()

  return id ? <EditUser /> : <AddUser />
}

