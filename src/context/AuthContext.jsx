import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'vitalyze:user'
const AuthContext = createContext(null)

function readStoredUser() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)

  const login = useCallback((profile) => {
    const nextUser = {
      name: profile.name || profile.email.split('@')[0],
      email: profile.email,
      joined: profile.joined || new Date().toISOString(),
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
    return nextUser
  }, [])

  const signup = useCallback(
    (profile) => login({ ...profile, joined: new Date().toISOString() }),
    [login],
  )

  const logout = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, login, signup, logout }), [user, login, signup, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }
  return context
}
