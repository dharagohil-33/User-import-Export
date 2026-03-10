"use client"

import { exportExcel } from "@/utils/excelExport"

export default function ExportUsersButton({ users }: any) {

  return (
    <button
      onClick={() => exportExcel(users)}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Export Excel
    </button>
  )
}