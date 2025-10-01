import { useEffect, useState, type FC } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface UserFormProps {
  initialData?: any
  onSubmit: (data: any) => Promise<void>
}

const UserForm: FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    status: "",
    resume: ""
  })
  const [error, setError] = useState("")

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const requiredFields = ["name", "email", "phone", "gender", "status", "resume"]
    for (const field of requiredFields) {
      if (!form[field as keyof typeof form]) {
        setError(`Please fill in the ${field} field.`)
        return
      }
    }

    try {
      await onSubmit(form)
    } catch (err: any) {
      // Display backend error
      setError(err?.response?.data?.message || "Failed to submit form")
    }
  }

  return (
    <form className="grid gap-4 max-w-xl mx-auto p-6" onSubmit={handleSubmit}>
      {error && <div className="text-red-600 font-medium">{error}</div>}

      <div className="grid gap-1">
        <Label>Name</Label>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="border-black focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-1">
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="border-black focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-1">
        <Label>Phone</Label>
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="border-black focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-1">
        <Label>Address</Label>
        <Textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          className="border-black focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-1">
        <Label>Gender</Label>
        <Select
          onValueChange={(value) => handleSelectChange("gender", value)}
          value={form.gender}
          required
        >
          <SelectTrigger className="border-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label>Status</Label>
        <Select
          onValueChange={(value) => handleSelectChange("status", value)}
          value={form.status}
          required
        >
          <SelectTrigger className="border-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label>Resume (URL)</Label>
        <Input
          name="resume"
          type="url"
          value={form.resume}
          onChange={handleChange}
          required
          className="border-black focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <Button type="submit" className="mt-4 w-full">
        Submit
      </Button>
    </form>
  )
}

export default UserForm
