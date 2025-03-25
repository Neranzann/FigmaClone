import { Bell, Mail, Plus, Settings, Sun } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Test Project</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full text-white text-[10px] flex items-center justify-center">
            2
          </span>
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
          <Mail className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
          <Sun className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-xs text-gray-600">▼</span>
        </div>
      </div>
    </header>
  )
}

