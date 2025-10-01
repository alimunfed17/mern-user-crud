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
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 md:p-10 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Add User
          </h1>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 md:mt-0"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
          <UserForm initialData={null} onSubmit={handleSubmit} />
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Fill out the form to add a new user. Fields marked with * are required.
        </p>
      </div>
    </div>
  )
}
