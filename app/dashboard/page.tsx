"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import UsersTable from "@/components/users/UserTable"
import ImportUsers from "@/components/users/ImportUsers"

export default function Dashboard() {

  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/adminlogin")
  }

  useEffect(() => {

    async function checkAuth() {

      const { data } = await supabase.auth.getSession()

      const user = data.session?.user

      if (!user || user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        router.push("/adminlogin")
      }

    }

    checkAuth()

  }, [])

  return (
    <div className="p-10">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <ImportUsers />
      <UsersTable />

    </div>
  )
}