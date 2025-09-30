import { useNavigate } from "react-router-dom"
import { createUser } from "../../services/api";
import UserForm from "../UserForm"
import { useSnackbar } from "notistack"

export default function AddUser() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (data: any) => {
    try {
      await createUser(data)
      enqueueSnackbar("User added", { variant: "success" })
      navigate("/")
    } catch {
      enqueueSnackbar("Failed to add user", { variant: "error" })
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto border-2 shadow-lg rounded-xl bg-blue-100">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <UserForm initialData={null} onSubmit={handleSubmit} />
    </div>
  )
}
