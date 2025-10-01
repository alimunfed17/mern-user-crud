import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUsers, deleteUser, exportUsers } from "../services/api"
import { useSnackbar } from "notistack"

import { SearchBar } from "@/components/ListUsers/SearchBar"
import { ExportButton } from "@/components/ListUsers/ExportButton"
import { AddButton } from "@/components/ListUsers/AddButton"
import { UserTable } from "@/components/ListUsers/UserTable"

export default function ListUsers() {
  const [users, setUsers] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 10

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const fetchUsers = async (currentPage = page, query = search) => {
    try {
      const res = await getUsers(currentPage, limit, query)
      setUsers(res.data.users)
      setPage(res.data.page)
      setTotal(res.data.total)
    } catch (err) {
      enqueueSnackbar("Failed to fetch users", { variant: "error" })
    }
  }

  useEffect(() => {
    fetchUsers(1, search)
  }, [search])

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id)
      enqueueSnackbar("User deleted", { variant: "success" })
      fetchUsers()
    } catch {
      enqueueSnackbar("Delete failed", { variant: "error" })
    }
  }

  const handleExport = async () => {
    try {
      const res = await exportUsers()
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "users.csv")
      document.body.appendChild(link)
      link.click()
    } catch {
      enqueueSnackbar("Export failed", { variant: "error" })
    }
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 border shadow-lg rounded-xl my-8">
      <div className="w-full max-w-4xl flex flex-col space-y-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-4 ">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex gap-2">
            <ExportButton onClick={handleExport} />
            <AddButton onClick={() => navigate("/add")} />
          </div>
        </div>

        <div className="flex-1 overflow-auto ">
          <UserTable
            users={users}
            total={total}
            page={page}
            limit={limit}
            onPageChange={(newPage) => fetchUsers(newPage)}
            onEdit={(id) => navigate(`/edit/${id}`)}
            onDelete={handleDelete}
            onView={(id) => navigate(`/view/${id}`)}
          />
        </div>
      </div>
    </div>
  )
}
