// Import Reducer type
import { Reducer } from 'redux';

import UserActions from '../actions/users/user.action.type';
import TYPES from '../actions/users/constants'
import { IUser } from '../interfaces/user'
import usersService from '../api/users.service'

export interface IUsersState {
  users: IUser[]
  isLoading: boolean
  selectedUserId: string
}

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  selectedUserId: '',
}

const usersReducer: Reducer<IUsersState, UserActions> = (
  state = initialState,
  action
): IUsersState => {
  switch (action.type) {
    case TYPES.FETCH_USERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TYPES.FETCH_USERS_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        users: action.users,
      }
    }
    case TYPES.FETCH_USERS_ERROR:{
      return {
        ...state,
        isLoading: false,
        users: [],
      }
    }
    case TYPES.ADD_USER: {
      return {
        ...state,
        users: [
          ...state.users,
          usersService.createUser(action.userName),
        ],
      }
    }
    case TYPES.SELECT_USER: {
      console.log(action.userId)
      return {
        ...state,
        selectedUserId: action.userId
      }
    }
    case TYPES.ADD_HOBBY: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies, action.hobby]
          return u
        })
      }
    }
    case TYPES.REMOVE_HOBBY: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies.filter(h => h.id !== action.hobbyId)]
          return u
        })
      }
    }
    default:
      return state;
  }
};

export default usersReducer;
