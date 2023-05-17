import { supabase } from "./client"

export async function authStatus() {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  console.log(session)
  if (session) {
    return true
  } else {
    return false
  }
}

export async function readUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return user
  } else {
    return undefined
  }
}
