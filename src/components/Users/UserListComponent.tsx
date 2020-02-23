import * as React from 'react'
import styles from './userList.module.scss'
import { IUser } from '../../interfaces/user'
import UserListItemComponent from './UserListItemComponent'

export interface UsersListBaseProps {
  users: IUser[]
  selectedUserId: string
  selectUser(id: string): void
}

export interface UsersListProps extends UsersListBaseProps {
}

const UsersListComponent = ({
  users,
  selectedUserId,
  selectUser,
}: UsersListProps) => {
  return (
    <div className={styles.container}>
      {
        users.map(user => 
          <UserListItemComponent
            key={`${user.id}-${user.name}`}
            user={user}
            isSelected={user.id === selectedUserId}
            selectUser={selectUser}
          />
        )
      }
    </div>
  )
}
export default UsersListComponent