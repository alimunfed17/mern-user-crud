import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddButtonProps {
  onClick: () => void
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <Button onClick={onClick} className="hover:bg-gray-400 hover:text-black">
      <Plus className="h-4 w-4" /> Add User
    </Button>
  )
}
