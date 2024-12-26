import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export const Notifications = () => {
  return (
    <Button variant="ghost" className="rounded-2xl py-6">
      <Bell
        color="#3352CC"
        fill="#3352CC"
      />
    </Button>
  )
}