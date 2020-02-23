import UserActionTypes from './constants'
import { IUser } from '../../interfaces/user'
import { IHobby } from '../../interfaces/hobby'
import {
  IGetUsersAction,
  IGetUsersSuccessAction,
  IAddUserAction,
  ISelectUserAction,
  IAddHobbyAction,
  IRemoveHobbyAction,
  IGetUsersErrorAction
} from './users.actions.interface'

export const fetchUsers =  (): IGetUsersAction => {
  return {
    type: UserActionTypes.FETCH_USERS
  }
}

export const fetchUsersSuccess =  (users: IUser[]): IGetUsersSuccessAction  => {
  return {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    users
  }
}

export const fetchUsersError =  (): IGetUsersErrorAction  => {
  return {
    type: UserActionTypes.FETCH_USERS_ERROR,
  }
}

export const addUser =  (userName: string) : IAddUserAction => {
  return {
    type: UserActionTypes.ADD_USER,
    userName
  }
}

export const selectUser =  (userId: string) : ISelectUserAction => {
  return {
    type: UserActionTypes.SELECT_USER,
    userId
  }
}

export const addHobby =  (hobby: IHobby): IAddHobbyAction => {
  return {
    type: UserActionTypes.ADD_HOBBY,
    hobby
  }
}

export const removeHobby =  (hobbyId: string) : IRemoveHobbyAction => {
  return {
    type: UserActionTypes.REMOVE_HOBBY,
    hobbyId
  }
}
