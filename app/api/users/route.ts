// user-import-export/user-import-export/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchUsers } from "@/lib/users";
import { importUsers } from "@/lib/users";
import { exportUsers } from "@/lib/users";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") || "1");
  const limit = Number(url.searchParams.get("limit") || "20");
  const search = url.searchParams.get("search") || "";

  try {
    const result = await fetchUsers({ page, limit, search });
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as Blob | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = await file.arrayBuffer();
  try {
    await importUsers(buffer);
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const excel = await exportUsers();
    return new NextResponse(excel, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="users.xlsx"',
      },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
