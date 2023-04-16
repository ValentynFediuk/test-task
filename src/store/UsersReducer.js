export const UsersReducer = (usersState, action) => {
    
    switch (action.type) {
      case 'loadUsers': {

      return {
        usersPage: action.usersPage,
        users: action.users,
      }
    }

    case 'registerUser': {
      console.log(usersState)

      return {
        users: action.users,
        usersPage: 1
      }
    }

    default: {
      throw Error('Unknown action')
    }
  }
}