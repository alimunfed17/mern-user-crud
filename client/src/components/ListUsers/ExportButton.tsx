import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ExportButtonProps {
  onClick: () => void
}

export function ExportButton({ onClick }: ExportButtonProps) {
  return (
    <Button variant="outline" onClick={onClick} className="hover:bg-black hover:text-white">
      <Download className="h-4 w-4" /> Export CSV
    </Button>
  )
}
