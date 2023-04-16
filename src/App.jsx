import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Users from './components/Users/Users';
import Signup from './components/Signup/Signup.jsx';
import {UsersContext, UsersReducer, UsersDispatchContext} from './store'
import {useReducer} from 'react'

const App = () => {
    const [usersState, dispatch] = useReducer(UsersReducer, {
        users: [], usersPage: 1
    })

    return (
        <>
            <Header/>
            <Hero/>
            <UsersContext.Provider value={usersState}>
                <UsersDispatchContext.Provider value={dispatch}>
                    <Users/>
                    <Signup/>
                </UsersDispatchContext.Provider>
            </UsersContext.Provider>
        </>
    )
}

export default App