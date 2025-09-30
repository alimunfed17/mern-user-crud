import { useNavigate } from "react-router-dom"
import { createUser } from "../../services/api";
import UserForm from "./UserForm"
import { useSnackbar } from "notistack"
import { Button } from "@/components/ui/button" 

export default function AddUser() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (data: any) => {
    try {
      await createUser(data)
      enqueueSnackbar("User added successfully", { variant: "success" })
      navigate("/")
    } catch (err: any) {
      const message = err?.response?.data?.message || "Failed to add user"
      enqueueSnackbar(message, { variant: "error" })
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto border-2 shadow-lg rounded-xl bg-blue-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Add User</h1>
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <UserForm initialData={null} onSubmit={handleSubmit} />
    </div>
  )
}
