import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';
import styles from './Users.module.scss'
import User from '../User/User.jsx';
import {useEffect} from "react";
import {UsersContext, UsersDispatchContext} from '../../store'
import {useContext} from 'react'
import {useUsers} from '../../hooks'
import { Spiner } from '../index.js';

const Users = () => {
    const usersState = useContext(UsersContext)
    const dispatch = useContext(UsersDispatchContext)

    const showMoreUsers = async (event) => {
        event.preventDefault()
        dispatch({ type: 'loadUsers', ...usersState, loading: true, usersPage: usersState.usersPage++ })
        const {users} = await useUsers(usersState.usersPage)
        dispatch({ type: 'loadUsers', ...usersState, users: [...usersState.users, ...users], loading: false })
    }

    const getUsers = async () => {
        const {users} = await useUsers(usersState.usersPage)
        dispatch({ type: 'loadUsers', users: users, loading: false, usersPage: usersState.usersPage++})
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <section className={styles.users}>
            <div className='container'>
                <h2>Working with GET request</h2>
                <div className={styles.users_list}>
                    {usersState.users?.map((user) => (
                        <User key={user.id} {...user}/>
                    ))}
                </div>
                {usersState.loading ? <Spiner />
                :
                <ButtonPrimary onClick={(event) => showMoreUsers(event)}>Show more</ButtonPrimary>
                }
            </div>
        </section>
    )
}

export default Users