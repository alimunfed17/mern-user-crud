import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getUser } from "@/services/api"
import { UserDetails } from "@/components/UserDetails/UserDetails"

export default function ViewUser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      setLoading(true)
      getUser(id)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false))
    }
  }, [id])

  if (loading) {
    return <p className="text-center mt-10 text-gray-500 animate-pulse">Loading user details...</p>
  }

  if (!user) {
    return <p className="text-center mt-10 text-red-500">User not found</p>
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <Card className="w-full max-w-xl bg-white shadow-xl border border-gray-200 rounded-xl">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            Back
          </Button>
        </CardHeader>

        <CardContent>
          <UserDetails user={user} />
        </CardContent>
      </Card>
    </div>
  )
}
