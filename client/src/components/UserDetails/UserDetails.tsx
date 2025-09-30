import { type FC } from "react"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

interface UserDetailsProps {
  user: {
    email: string
    phone: string
    address: string
    gender: string
    status: string
    resume: string
  }
}

export const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <Label>Email</Label>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div>
        <Label>Phone</Label>
        <p className="text-gray-700">{user.phone}</p>
      </div>
      <div>
        <Label>Address</Label>
        <p className="text-gray-700">{user.address}</p>
      </div>
      <div>
        <Label>Gender</Label>
        <p className="text-gray-700 capitalize">{user.gender}</p>
      </div>
      <div>
        <Label>Status</Label>
        <Badge
          variant="default"
          className={`capitalize ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {user.status}
        </Badge>
      </div>
      <div className="col-span-full flex items-center gap-2">
        <FileText className="text-blue-600" />
        <a
          href={user.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900 transition-colors cursor-pointer"
        >
          View Resume
        </a>
      </div>
    </div>
  )
}
