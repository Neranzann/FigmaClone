import { Search } from "lucide-react"
import { LayoutDashboard, Home, FileQuestion, Users, Wrench, FileText, ClipboardList } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-[220px] bg-white border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">CRM</span>
          </div>
          <span className="text-xs text-gray-600">▼</span>
        </div>
      </div>
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <span className="text-lg">⋮</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <nav className="p-2">
          <ul className="space-y-1">
            {[
              { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
              { icon: <Home className="w-5 h-5" />, label: "Office Check-in" },
              { icon: <FileQuestion className="w-5 h-5" />, label: "Enquiries" },
              { icon: <Users className="w-5 h-5" />, label: "Clients", active: true },
              { icon: <Wrench className="w-5 h-5" />, label: "Services" },
              { icon: <FileText className="w-5 h-5" />, label: "Quotation" },
              { icon: <ClipboardList className="w-5 h-5" />, label: "Tasks" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                    item.active ? "bg-[#f0f0ff] text-[#5555ff]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  <span className="ml-auto text-lg">⋮</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

