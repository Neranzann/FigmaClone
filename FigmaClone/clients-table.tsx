"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Filter, Calendar, CheckSquare, SlidersHorizontal, Plus, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define the client data structure
interface Client {
  id: string
  name: string
  email: string
  avatar: string
  addedFrom: string
  tags: string
  internalId: string
  clientId: string
  phone: string
  clientPortal: string
  assignee: {
    name: string
    role: string
    avatar: string
  }
}

// Define the column structure
interface Column {
  id: string
  label: string
  visible: boolean
}

export default function ClientsTable() {
  // Initial client data
  const initialClients: Client[] = [
    {
      id: "1",
      name: "Nisha Girl Puri",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Justin",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "2",
      name: "Abram Press",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Miracle",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "3",
      name: "Charlie Curtis",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Nolan",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "4",
      name: "Jocelyn Curtis",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Alena",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "5",
      name: "Dulce Calzoni",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Madelyn",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "6",
      name: "Adison Curtis",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Mia",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "7",
      name: "Tatiana Septimus",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Kaiya",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: "8",
      name: "Jaydon Levin",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Gustavo",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  // Initial columns configuration
  const initialColumns: Column[] = [
    { id: "name", label: "Name", visible: true },
    { id: "addedFrom", label: "Added from", visible: true },
    { id: "tags", label: "Tags", visible: true },
    { id: "internalId", label: "Internal Id", visible: true },
    { id: "clientId", label: "Client Id", visible: true },
    { id: "phone", label: "Phone", visible: true },
    { id: "clientPortal", label: "Client Portal", visible: true },
    { id: "assignee", label: "Assignee", visible: true },
  ]

  // State for clients and columns
  const [clients, setClients] = useState<Client[]>(initialClients)
  const [columns, setColumns] = useState<Column[]>(initialColumns)
  const [editingCell, setEditingCell] = useState<{ clientId: string; columnId: string } | null>(null)
  const [editValue, setEditValue] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle adding a new client
  const handleAddClient = () => {
    const newClient: Client = {
      id: `${clients.length + 1}`,
      name: "New Client",
      email: "example@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: {
        name: "Assignee",
        role: "Interface S",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    }

    setClients([...clients, newClient])
  }

  // Handle hiding a column
  const handleHideColumn = (columnId: string) => {
    setColumns(columns.map((col) => (col.id === columnId ? { ...col, visible: false } : col)))
  }

  // Handle showing a hidden column
  const handleShowColumn = (columnId: string) => {
    setColumns(columns.map((col) => (col.id === columnId ? { ...col, visible: true } : col)))
  }

  // Handle cell click for selection
  const handleCellClick = (clientId: string, columnId: string) => {
    // If already editing, don't do anything
    if (editingCell) return

    // Set the selected cell
    console.log(`Selected cell: ${clientId}, ${columnId}`)
  }

  // Handle cell double click for editing
  const handleCellDoubleClick = (clientId: string, columnId: string, value: string) => {
    setEditingCell({ clientId, columnId })
    setEditValue(value)

    // Focus the input after it's rendered
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }

  // Handle saving the edited cell value
  const handleSaveEdit = (clientId: string, columnId: string) => {
    if (!editingCell) return

    setClients(
      clients.map((client) => {
        if (client.id === clientId) {
          if (columnId === "name") {
            return { ...client, name: editValue }
          } else if (columnId === "addedFrom") {
            return { ...client, addedFrom: editValue }
          } else if (columnId === "tags") {
            return { ...client, tags: editValue }
          } else if (columnId === "internalId") {
            return { ...client, internalId: editValue }
          } else if (columnId === "clientId") {
            return { ...client, clientId: editValue }
          } else if (columnId === "phone") {
            return { ...client, phone: editValue }
          } else if (columnId === "clientPortal") {
            return { ...client, clientPortal: editValue }
          }
        }
        return client
      }),
    )

    setEditingCell(null)
  }

  // Handle key press in the edit input
  const handleKeyPress = (e: React.KeyboardEvent, clientId: string, columnId: string) => {
    if (e.key === "Enter") {
      handleSaveEdit(clientId, columnId)
    } else if (e.key === "Escape") {
      setEditingCell(null)
    } else if (e.key === "Tab") {
      e.preventDefault()
      handleSaveEdit(clientId, columnId)

      // Find the next visible column
      const visibleColumns = columns.filter((col) => col.visible)
      const currentIndex = visibleColumns.findIndex((col) => col.id === columnId)
      const nextColumn = visibleColumns[(currentIndex + 1) % visibleColumns.length]

      if (nextColumn) {
        setEditingCell({ clientId, columnId: nextColumn.id })

        // Get the value for the next cell
        const client = clients.find((c) => c.id === clientId)
        if (client) {
          const nextValue = client[nextColumn.id as keyof Client] as string
          setEditValue(nextValue || "")

          // Focus the input after it's rendered
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus()
            }
          }, 0)
        }
      }
    }
  }

  // Handle click outside to cancel editing
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        if (editingCell) {
          handleSaveEdit(editingCell.clientId, editingCell.columnId)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [editingCell])

  // Render cell content based on column type
  const renderCellContent = (client: Client, columnId: string) => {
    const isEditing = editingCell?.clientId === client.id && editingCell?.columnId === columnId

    if (isEditing) {
      return (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, client.id, columnId)}
          onBlur={() => handleSaveEdit(client.id, columnId)}
          className="w-full px-2 py-1 border rounded"
          autoFocus
        />
      )
    }

    switch (columnId) {
      case "name":
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={client.avatar || "/placeholder.svg"}
                alt={client.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <div>{client.name}</div>
              <div className="text-xs text-gray-500">{client.email}</div>
            </div>
          </div>
        )
      case "assignee":
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={client.assignee.avatar || "/placeholder.svg"}
                alt={client.assignee.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <div>{client.assignee.name}</div>
              <div className="text-xs text-gray-500">{client.assignee.role}</div>
            </div>
          </div>
        )
      default:
        return client[columnId as keyof Client] as string
    }
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-medium">Clients</h2>
          </div>
          <div className="ml-auto flex items-center">
            <div className="relative">
              <select
                className="appearance-none bg-white border rounded-md px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                defaultValue="Branch(Kathmandu)"
              >
                <option>Branch(Kathmandu)</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
            <button className="ml-2 p-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="text-xl">⋮</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Particular"
              className="w-full pl-9 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <Button variant="outline" className="flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            Filter by assigned
            <span className="text-xs ml-1">▼</span>
          </Button>

          <Button variant="outline" className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            Date
            <span className="text-xs ml-1">▼</span>
          </Button>

          <Button variant="outline" className="flex items-center gap-2 text-sm">
            <CheckSquare className="w-4 h-4" />
            Status
            <span className="text-xs ml-1">▼</span>
          </Button>

          <div className="flex items-center gap-3 ml-auto">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </Button>

            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4" />
              Sort
            </Button>

            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4" />
              Saved Filter
            </Button>

            <Button variant="link" className="text-blue-500 text-sm">
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <Button
            variant="default"
            className="bg-[#6366f1] hover:bg-[#5355d1] text-white flex items-center gap-2"
            onClick={handleAddClient}
          >
            New Client
            <span className="text-xs">▼</span>
          </Button>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">Prospects(18)</div>
            <div className="text-sm text-gray-600 font-medium border-b-2 border-[#6366f1] pb-1">Clients(10)</div>
            <div className="text-sm text-gray-600">Archived(0)</div>
          </div>
        </div>
      </div>

      <div className="overflow-auto max-h-[calc(100vh-400px)]">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="w-10 p-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>

              {columns
                .filter((col) => col.visible)
                .map((column) => (
                  <th key={column.id} className="p-3 text-left font-medium text-sm text-gray-600 relative">
                    <div className="flex items-center gap-2">
                      {column.label}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">⋮</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleHideColumn(column.id)}>Hide column</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </th>
                ))}

              <th className="p-3 text-left font-medium text-sm text-gray-600">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {columns
                      .filter((col) => !col.visible)
                      .map((column) => (
                        <DropdownMenuItem key={column.id} onClick={() => handleShowColumn(column.id)}>
                          {column.label}
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="rounded" />
                </td>

                {columns
                  .filter((col) => col.visible)
                  .map((column) => (
                    <td
                      key={`${client.id}-${column.id}`}
                      className="p-3"
                      onClick={() => handleCellClick(client.id, column.id)}
                      onDoubleClick={() => {
                        const value = client[column.id as keyof Client] as string
                        handleCellDoubleClick(client.id, column.id, value || "")
                      }}
                    >
                      {renderCellContent(client, column.id)}
                    </td>
                  ))}

                <td className="p-3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t text-sm text-gray-600">
        <button className="flex items-center gap-1 text-blue-500">
          <Plus className="w-4 h-4" />
          Add Client's details
        </button>
      </div>
    </div>
  )
}

