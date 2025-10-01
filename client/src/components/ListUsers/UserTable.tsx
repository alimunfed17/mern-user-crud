import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination } from "@/components/Common/Pagination";
import { ConfirmModal } from "@/components/Common/ConfirmModal";

interface User {
  _id: string;
  name: string;
  email: string;
  gender?: string;
  status?: string;
  resume?: string;
}

interface UserTableProps {
  users: User[];
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

export function UserTable({
  users,
  total,
  page,
  limit,
  onPageChange,
  onEdit,
  onDelete,
  onView,
}: UserTableProps) {
  const totalPages = Math.ceil(total / limit);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedUserId) onDelete(selectedUserId);
    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gray-50 border-b">
            <TableHead className="px-4 py-2 text-left">#</TableHead>
            <TableHead className="px-4 py-2 text-left">Name</TableHead>
            <TableHead className="px-4 py-2 text-left">Email</TableHead>
            <TableHead className="px-4 py-2 text-left">Gender</TableHead>
            <TableHead className="px-4 py-2 text-left">Status</TableHead>
            <TableHead className="px-4 py-2 text-left">Resume</TableHead>
            <TableHead className="px-4 py-2 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={user._id} className="border-b hover:bg-gray-50 transition-colors">
                <TableCell className="px-4 py-2">{(page - 1) * limit + index + 1}</TableCell>
                <TableCell className="px-4 py-2">{user.name}</TableCell>
                <TableCell className="px-4 py-2">{user.email}</TableCell>
                <TableCell className="px-4 py-2">{user.gender || "—"}</TableCell>
                <TableCell className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status || "unknown"}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-2">
                  {user.resume ? (
                    <a href={user.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Resume
                    </a>
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell className="px-4 py-2 text-right space-x-1">
                  <Button variant="ghost" size="sm" onClick={() => onView(user._id)} className="hover:text-blue-600 hover:bg-gray-200">
                    View
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onEdit(user._id)} className="hover:bg-gray-200">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-gray-200" onClick={() => handleDeleteClick(user._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500 px-4 py-4">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-4 px-4">
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </div>

      <ConfirmModal
        isOpen={showDeleteModal}
        title="Confirm Delete"
        message="Are you sure you want to delete this user?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
