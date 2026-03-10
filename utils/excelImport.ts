import * as XLSX from "xlsx"
import { insertUsers } from "@/services/userService"

export async function importExcel(file: File) {

  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer)

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const data = XLSX.utils.sheet_to_json(sheet)

  await insertUsers(data as any)
  
}