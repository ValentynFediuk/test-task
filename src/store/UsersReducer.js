export const UsersReducer = (usersState, action) => {
  switch (action.type) {
    case 'loadUsers': {
      return {
        ...usersState,
        usersPage: action.usersPage,
        usersList: action.usersList,
      }
    }

    case 'registerUser': {
      return {
        usersList: action.usersList,
        usersPage: 1,
      }
    }

    default: {
      throw Error('Unknown action')
    }
  }
}
