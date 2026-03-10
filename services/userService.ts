import { supabase } from "@/lib/supabaseClient"

export async function fetchUsers(page: number, limit: number, search: string) {

  const from = (page - 1) * limit
  const to = from + limit - 1

  let query = supabase
    .from("users")
    .select("*", { count: "exact" })
    .range(from, to)

  if (search) {
    query = query.ilike("name", `%${search}%`)
  }

  const { data, error, count } = await query

  if (error) throw error

  return { users: data, total: count }
}