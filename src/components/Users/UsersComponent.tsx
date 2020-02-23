import React, { useEffect, useState } from 'react'
import styles from './users.module.scss'
import { IUser } from '../../interfaces/user'
import UserListComponent from './UserListComponent'

export interface UsersListBaseProps {
  isLoading: boolean
  users: IUser[]
  selectedUserId: string
  selectUser(id: string): void
  fetchUsers(): IUser[]
  addUser(id: string): void
}

export interface UsersListProps extends UsersListBaseProps {
}

export const UsersComponent = ({
  isLoading,
  users,
  selectedUserId,
  selectUser,
  fetchUsers,
  addUser
}: UsersListProps) => {
  console.log(selectedUserId)
  const [newUserName, setNewUserName] = useState('')
  const [emptyError, setEmptyError] = useState(false)
  const onAddUser = () => {
     if(newUserName !== '') {
        addUser(newUserName)
        setNewUserName('')
        setEmptyError(false)
     } else {
        setEmptyError(true)
     }
  }
  useEffect(()=>{
   fetchUsers()
  },[fetchUsers])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Please enter user name'
          value={newUserName}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setNewUserName(value)}
          className={styles.inputContainerField}
        />
        <button className={styles.addUserbutton} onClick={onAddUser}>Add User</button>
      </div>
      {
        emptyError && (
          <span>Please enter Proper Username</span>
        )
      }
      <UserListComponent
        users={users}
        selectedUserId={selectedUserId}
        selectUser={selectUser}
      />
    </div>
  )
}
export default UsersComponent