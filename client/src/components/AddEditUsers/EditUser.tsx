import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser, getUser } from "../../services/api"
import UserForm from "./UserForm"
import { useSnackbar } from "notistack"
import { Button } from "@/components/ui/button"

export default function EditUser() {
  const [user, setUser] = useState<any>(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (id) {
      getUser(id).then((res) => setUser(res.data))
    }
  }, [id])

  const handleSubmit = async (data: any) => {
    try {
      if (!id) return
      await updateUser(id, data)
      enqueueSnackbar("User updated successfully", { variant: "success" })
      navigate("/")
    } catch {
      enqueueSnackbar("Failed to update user", { variant: "error" })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gray-300 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">
            Edit User
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
          {user ? (
            <UserForm initialData={user} onSubmit={handleSubmit} />
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Loading user data...
            </p>
          )}
        </div>

      </div>
    </div>
  )
}
