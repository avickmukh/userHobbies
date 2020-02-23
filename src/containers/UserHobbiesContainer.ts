import { connect } from 'react-redux'
import { AppState } from '../reducers/index'
import { IUsersState } from '../reducers/users'
import {
  addHobby,
  removeHobby
} from '../actions/users/users'
import UserHobbiesComponent from '../components/UserHobbies/UserHobbiesComponent'
import { IHobby } from '../interfaces/hobby'
import { IUser } from '../interfaces/user'

const findUserById = (users: IUser[]) => (userId: string) => users.find(u => u.id === userId)
export const getSelectedUserId = (state: IUsersState) => state.selectedUserId
export const getUsers = (state: IUsersState) => state.users
export const getSelectedUser = (state: IUsersState) => findUserById(getUsers(state))(getSelectedUserId(state))
export const getSelectedUserHobbies = (state: IUsersState) => getSelectedUserId(state) ? getSelectedUser(state)?.hobbies : []

const mapStateToProps = (store: AppState) => ({
  user: getSelectedUser(store.users),
  hobbies: getSelectedUserHobbies(store.users),
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    addHobby: (hobby: IHobby) => dispatch(addHobby(hobby)),
    removeHobby: (hobbyId: string) => dispatch(removeHobby(hobbyId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHobbiesComponent as any)
