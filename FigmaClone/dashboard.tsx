"use client"
import Sidebar from "./sidebar"
import ClientsTable from "./clients-table"
import Header from "./header"

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-[#f8f8f8]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <ClientsTable />
        </main>
      </div>
    </div>
  )
}

