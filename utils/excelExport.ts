/* eslint-disable @typescript-eslint/no-explicit-any */
import * as XLSX from "xlsx"

export function exportExcel(users: any[]) {

  const worksheet = XLSX.utils.json_to_sheet(users)

  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, "users")

  XLSX.writeFile(workbook, "users.xlsx")
}