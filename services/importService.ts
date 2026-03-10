import * as XLSX from "xlsx"
import { supabase } from "@/lib/supabaseClient"

export async function importUsers(file: File) {

  const data = await file.arrayBuffer()

  const workbook = XLSX.read(data)

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const rows = XLSX.utils.sheet_to_json(sheet)

  const users = rows.map((row: any) => ({
    name: row.name,
    email: row.email,
    phone: row.phone,
    role: row.role || "user"
  }))

  const { error } = await supabase
    .from("users")
    .insert(users)

  if (error) throw error

  return true
}