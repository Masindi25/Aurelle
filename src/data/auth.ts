export type AurellaUser = { name: string; email: string; password: string }

const userKey = 'aurella-user'
const sessionKey = 'aurella-session'

export const getUser = (): AurellaUser | null => {
  try { return JSON.parse(localStorage.getItem(userKey) ?? 'null') as AurellaUser | null } catch { return null }
}

export const registerUser = (user: AurellaUser) => {
  localStorage.setItem(userKey, JSON.stringify(user))
  localStorage.setItem(sessionKey, 'active')
}

export const loginUser = (email: string, password: string) => {
  const user = getUser()
  if (!user || user.email.toLowerCase() !== email.toLowerCase() || user.password !== password) return false
  localStorage.setItem(sessionKey, 'active')
  return true
}

export const isLoggedIn = () => localStorage.getItem(sessionKey) === 'active'
export const logoutUser = () => localStorage.removeItem(sessionKey)
