import { useNavigate } from "react-router-dom"
import { createUser } from "../../services/api"
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gray-300 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">
            Add User
          </h1>
          <Button
            variant="outline"
            size="sm"
            className="w-24 mt-3 md:mt-0 hover:bg-blue-400 text-base"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </div>

        <div className="p-6 md:p-8">
          <UserForm initialData={null} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
