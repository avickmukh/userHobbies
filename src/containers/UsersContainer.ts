import { connect } from 'react-redux';
import {
  fetchUsers,
  selectUser,
  addUser
} from '../actions/users/users';

import UsersComponent from '../components/Users/UsersComponent';
import { AppState } from '../reducers/index'


const mapStateToProps = (store: AppState) => {
  return {
    users: store.users.users,
    selectedUserId:store.users.selectedUserId,
    isLoading: store.users.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectUser: (userId: string) => dispatch(selectUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: (userName: string) => dispatch(addUser(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent as any);