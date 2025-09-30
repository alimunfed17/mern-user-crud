import { type FC } from "react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FileText, Mail, Phone, MapPin, User, Activity } from "lucide-react";

interface UserDetailsProps {
  user: {
    email: string;
    phone: string;
    address: string;
    gender: string;
    status: string;
    resume: string;
  };
}

export const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center space-x-3 border border-black max-w-fit px-4">
        <User className="w-8 h-8 text-primary" />
        <h1 className="text-xl font-semibold">User Details</h1>
      </div>

      <section className="bg-blue-50 p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-700 mb-2">Gender</p>
            <p className="text-sm text-gray-900">{user.gender}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-700 mb-2">Status</p>
            <Badge variant="secondary">{user.status}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
            <p className="text-sm text-gray-900 break-words">{user.email}</p>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">Phone</label>
            <p className="text-sm text-gray-900">{user.phone}</p>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">Address</label>
            <p className="text-sm text-gray-900 break-words">{user.address}</p>
          </div>
        </div>
      </section>



      <section className="bg-blue-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-center space-x-2">
          <a
            href={user.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline hover:text-blue-600"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
};
