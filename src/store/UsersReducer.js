export const UsersReducer = (usersState, action) => {
    
    switch (action.type) {
      case 'loadUsers': {

      return {
        ...usersState,
        usersPage: action.usersPage,
        users: action.users,
      }
    }

    case 'registerUser': {

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