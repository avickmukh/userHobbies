import {
    IGetUsersAction,
    IGetUsersSuccessAction,
    IAddUserAction,
    ISelectUserAction,
    IAddHobbyAction,
    IRemoveHobbyAction,
    IGetUsersErrorAction
  } from './users.actions.interface';
  
  // Combine the action types with a union (we assume there are more)
  type UserActions =
  IGetUsersAction
    | IGetUsersSuccessAction
    | IAddUserAction
    | IAddHobbyAction
    | ISelectUserAction
    | IRemoveHobbyAction
    | IGetUsersErrorAction;
  
  export default UserActions;