import { useEffect, useState, useContext, React } from 'react'
import styles from './Users.module.scss'
import { Spiner, Button, Title, User } from 'components'
import { useUsers } from 'hooks'
import { UsersContext, UsersDispatchContext } from 'store'

export function Users() {
  const usersState = useContext(UsersContext)
  const dispatch = useContext(UsersDispatchContext)

  const { usersList } = usersState

  const [usersLoading, setUsertLoading] = useState(true)
  const [pagesLimit, setPagesLimit] = useState(null)

  const showMoreUsers = async (event) => {
    event.preventDefault()
    dispatch({
      type: 'loadUsers',
      ...usersState,
      usersPage: usersState.usersPage++,
    })

    setUsertLoading(true)
    const { users, total_pages } = await useUsers(usersState.usersPage)
    setPagesLimit(total_pages)
    dispatch({
      type: 'loadUsers',
      ...usersState,
      usersList: [...usersList, ...users],
    })
    setUsertLoading(false)
  }

  const getUsers = async () => {
    setUsertLoading(true)
    const { users, total_pages } = await useUsers(usersState.usersPage)
    setPagesLimit(total_pages)
    dispatch({ type: 'loadUsers', usersList: users, usersPage: 1 })
    setUsertLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <section id="users" className={styles.users}>
      <div className="container">
        <Title typeTitle="h2" color="black">
          Working with GET request
        </Title>
        <div className={styles.users_list}>
          {usersList?.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </div>
        {usersState.usersPage < pagesLimit &&
          (usersLoading ? (
            <Spiner />
          ) : (
            <Button
              typeBtn="submit"
              appearance="primary"
              onClick={(event) => showMoreUsers(event)}
              text="Show more"
            />
          ))}
      </div>
    </section>
  )
}
