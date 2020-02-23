import * as React from 'react'
import classnames from 'classnames'
import { IUser } from '../../interfaces/user'
import { IHobby } from '../../interfaces/hobby'
import styles from './userHobbiesList.module.scss'

export interface UserHobbiesListProps {
  user: IUser
  hobbies: IHobby[]
  removeHobby(hobbyId: string): void
}

interface NoHobbiesPlaceholderProps {
  user: IUser
}

const NoHobbiesPlaceholder = ({user}: NoHobbiesPlaceholderProps) =>
  <span>{`${user.name} has no specified his hobbies yet`}</span>

const UserHobbiesListComponent = ({user, hobbies, removeHobby}: UserHobbiesListProps) => {
  const removeUserHobby = (hobby: IHobby) => {
    removeHobby(hobby.id)
  }

  if (!hobbies.length) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <NoHobbiesPlaceholder user={user}/>
      </div>
    )
  }

  return (<div className={styles.container}>
    {
      hobbies.map(hobby => (
        <div key={`${hobby.name}-${hobby.level}`} className={styles.item}>
          <span>{hobby.level}</span>
          <span>{hobby.name}</span>
          <span>{hobby.date}</span>
          <button className={styles.deleteBtn} onClick={() => removeUserHobby(hobby)}>Remove</button>
        </div>
      ))
    }
  </div>)
}

export default UserHobbiesListComponent