import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Users from '../../containers/UsersContainer'
import UserHobbies from '../../containers/UserHobbiesContainer'
import styles from "./app.module.scss";

const App = () => (
  <Provider store={store}>
    <div className={styles.heading}>USER HOBBIES LIST</div>
    <div className={styles.container}>
      <Users/>
      <UserHobbies/>
    </div>
  </Provider>
)

export default App