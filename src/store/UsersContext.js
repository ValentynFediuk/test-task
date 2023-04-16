import { createContext } from 'react'

export const UsersContext = createContext({users: [], usersPage: 1})
export const UsersDispatchContext = createContext(() => {
  // default dispatch function can be an empty function or throw an error
  throw new Error('Dispatch function not set')
})