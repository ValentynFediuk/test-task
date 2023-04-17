import { useReducer, React } from 'react'
import { UsersContext, UsersReducer, UsersDispatchContext } from './store'
import { Hero, Signup, Header, Users } from 'components'

export function App() {
  const [usersState, dispatch] = useReducer(UsersReducer, {
    users: [],
    usersPage: 1,
  })

  return (
    <>
      <Header />
      <Hero />
      <UsersContext.Provider value={usersState}>
        <UsersDispatchContext.Provider value={dispatch}>
          <Users />
          <Signup />
        </UsersDispatchContext.Provider>
      </UsersContext.Provider>
    </>
  )
}
