import { create } from 'zustand'

interface StoreState{
  authenticated: boolean,
  user: any,
  setAuthentication: (data: boolean) => void,
  setUser: (data: any) => void,
}

export const useAuthStore = create<StoreState>((set) => ({
  authenticated: false, // initial value of authenticated property
  user: {}, // initial value of user property
  setAuthentication: (val) => set({ authenticated: val }), // function to set the authentication status
  setUser: (user) => set({ user }) // function to set user information
}))