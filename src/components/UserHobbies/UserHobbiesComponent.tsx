import React, { useState } from 'react'
import { IUser } from '../../interfaces/user'
import { IHobby, PassionLevel } from '../../interfaces/hobby'
import classnames from 'classnames'
import styles from './userHobbies.module.scss'
import UserHobbiesListComponent from './UserHobbiesListComponent'

export interface UserHobbiesProps {
  user: IUser
  hobbies: IHobby[]
  addHobby(hobby: IHobby): void
  removeHobby(hobbyId: string): void
}

const NoUserSelectedPlaceholder = () =>
  <span>Select a user from the users list...</span>

const UserHobbiesComponent = ({user, hobbies, addHobby, removeHobby}: UserHobbiesProps) => {
  const [level, setLevel] = useState(PassionLevel.Low)
  const [hobby, setHobby] = useState('')
  const [year, setYear] = useState('')

  const tryAddHobby = () => {
    if (hobbies.find(h => h.name.toLowerCase() === hobby.trim().toLowerCase())) {
      alert(`The hobby "${hobby}" already exists in the hobbies list`)
      return
    } else if(hobby.trim() === ''){
      alert('Please enter your hobby')
      return
    } 
    addHobby({ id: Math.random().toString(), name: hobby, level, date: year})
  }

  if (!user) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <NoUserSelectedPlaceholder/>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <select 
          className={styles.inputContainerField}
          value={level} onChange={({target: {value}}) => setLevel(value as PassionLevel)}>
          {Object.values(PassionLevel).map(lvl =>
            <option key={lvl} value={lvl}>{lvl}</option>
          )}
        </select>
        <input
          type='text'
          value={hobby}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setHobby(value)}
          placeholder='Enter user hobby'
          className={styles.inputContainerField}
        />
        <input
          type='text'
          value={year}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setYear(value)}
          placeholder='Enter year'
          className={styles.inputContainerField}
        />
        <button className={styles.addHobbybutton} onClick={tryAddHobby}>Add Hobby</button>
      </div>
      <UserHobbiesListComponent
        user={user}
        hobbies={hobbies}
        removeHobby={removeHobby}
      />
    </div>
  )
}

export default UserHobbiesComponent