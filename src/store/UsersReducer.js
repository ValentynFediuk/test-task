export const UsersReducer = (usersState, action) => {
    
    switch (action.type) {
      case 'loadUsers': {

      return {
        ...usersState,
        users: action.users,
        loading: action.loading,
        usersPage: action.usersPage,
      }
    }
   
    case 'registerUser': {

      return {
        ...usersState,
        users: action.user
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}