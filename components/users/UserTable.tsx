"use client"

import { useEffect, useState } from "react"
import { fetchUsers } from "@/services/userService"

export default function UsersTable() {

  const [users, setUsers] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState("")

  const limit = 5

  async function loadUsers() {
    const res = await fetchUsers(page, limit, search)
    setUsers(res.users || [])
    setTotal(res.total || 0)
  }

  useEffect(() => {
    loadUsers()
  }, [page, search])

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="space-y-4">

      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2"
      />

      <table className="w-full border">

        <thead>
          <tr className="black">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <div className="flex gap-2">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>

      </div>

    </div>
  )
}