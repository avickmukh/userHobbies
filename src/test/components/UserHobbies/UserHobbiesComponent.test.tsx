import React from "react";
import { shallow } from 'enzyme';
import UserHobbiesComponent from '../../../components/UserHobbies/UserHobbiesComponent'
import Users from '../../../containers/UsersContainer'
import UserHobbies from '../../../containers/UserHobbiesContainer'
import styles from "../../../components/app.module.scss";
import { IUser } from "../../../interfaces/user";

describe('Testing User Hobbies Component', () => {
  const addHobby = () => {}
  const removeHobby = () => {}
  const user : IUser ={
    id: '1',
    name: '22',
    hobbies: []
  }
  const userHobbies = shallow(<UserHobbiesComponent user={user} hobbies={[]} removeHobby={removeHobby} addHobby={removeHobby}/>);
  it('Renders App Component', () => {
    expect(userHobbies).toMatchSnapshot();
  });
});