import * as React from 'react'
import { IUser } from '../../interfaces/user'
import styles from './usersListItem.module.scss'
import {default as classnames} from 'classnames'

export interface UserListItemProps {
  user: IUser
  isSelected: boolean;
  selectUser(id: string): void
}

export const UsersListItemComponent = ({user, isSelected, selectUser}: UserListItemProps) => (
  <div
    className={classnames({
      [styles.container]: true,
      [styles.selected]: isSelected
    })}
    onClick={() => selectUser(user.id)}
  >
    {user.name}
  </div>
)
export default UsersListItemComponent