import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser, getUser } from "../../services/api";
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
      enqueueSnackbar("User updated", { variant: "success" })
      navigate("/")
    } catch {
      enqueueSnackbar("Failed to update user", { variant: "error" })
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto border-2 shadow-lg rounded-xl bg-blue-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Edit User</h1>
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      {user ? (
        <UserForm initialData={user} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
