import { IUser } from '../interfaces/user'
import { users } from './users.data';


export interface IUsersService {
  getUsers(): Promise<IUser[]>
  createUser(userName: string): IUser
}

const usersService: IUsersService = {
  getUsers(): Promise<IUser[]> {
    return new Promise((resolve) => setTimeout(() => resolve(users), 500))
  },

  createUser(userName: string): IUser {
    return {
      id: Math.random().toString(),
      name: userName,
      hobbies: []
    }
  }
}
export default usersService