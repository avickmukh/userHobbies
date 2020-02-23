import UserActionTypes from './constants'
import { IUser } from '../../interfaces/user'
import { IHobby } from '../../interfaces/hobby'

export interface IGetUsersAction {
    type: UserActionTypes.FETCH_USERS
}

export interface IGetUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    users: IUser[]
}

export interface IGetUsersErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR
}

export interface IAddUserAction {
    type: UserActionTypes.ADD_USER,
    userName: string
}

export interface ISelectUserAction {
    type: UserActionTypes.SELECT_USER,
    userId: string
}

export interface IAddHobbyAction {
    type: UserActionTypes.ADD_HOBBY,
    hobby: IHobby
}

export interface IRemoveHobbyAction {
    type: UserActionTypes.REMOVE_HOBBY,
    hobbyId: string
}