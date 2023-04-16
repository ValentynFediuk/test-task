import styles from './Users.module.scss'
import {useEffect, useState} from "react";
import {UsersContext, UsersDispatchContext} from 'store'
import {useContext} from 'react'
import {useUsers} from 'hooks'
import { Spiner, Button, Title, User } from 'components';

const Users = () => {
    const usersState = useContext(UsersContext)
    const dispatch = useContext(UsersDispatchContext)

    const [usersLoading, setUsertLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(null)

    const showMoreUsers = async (event) => {
        event.preventDefault()
        dispatch({ type: 'loadUsers', ...usersState, usersPage: usersState.usersPage++ })

        console.log(totalPages, usersState.usersPage)
        if (usersState.usersPage <= totalPages) {
            setUsertLoading(true)
            const {users, total_pages} = await useUsers(usersState.usersPage)
            setTotalPages(total_pages)
            dispatch({ type: 'loadUsers', ...usersState, users: [...usersState.users, ...users] })
            setUsertLoading(false)
        }
    }

    const getUsers = async () => {
        setUsertLoading(true)
        const {users, total_pages} = await useUsers(usersState.usersPage)
        setTotalPages(total_pages)
        setUsertLoading(false)
        dispatch({ type: 'loadUsers', usersPage: usersState.usersPage, users: users})
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <section id='users' className={styles.users}>
            <div className='container'>
                <Title typeTitle='h2' color='black'>Working with GET request</Title>
                <div className={styles.users_list}>
                    {usersState.users?.map((user) => (
                        <User key={user.id} {...user}/>
                    ))}
                </div>
                {usersState.usersPage < totalPages && 
                    <>
                        { usersLoading ? <Spiner />
                        :
                        <Button typeBtn='submit' appearance='primary' onClick={(event) => showMoreUsers(event)} text='Show more' />
                        }
                    </>
                }
                
            </div>
        </section>
    )
}

export default Users