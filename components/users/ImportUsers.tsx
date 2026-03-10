"use client"

import { useState } from "react"
import { importUsers } from "@/services/importService"

export default function ImportUsers() {

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleFile = async (e: any) => {

    const file = e.target.files[0]

    if (!file) return

    setLoading(true)

    try {

      await importUsers(file)

      setMessage("Users imported successfully")

    } catch (err) {

      setMessage("Import failed")

    }

    setLoading(false)
  }

  return (

    <div className="space-y-2">

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFile}
      />

      {loading && <p>Importing...</p>}

      {message && <p>{message}</p>}

    </div>
  )
}