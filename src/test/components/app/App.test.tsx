import React from "react";
import { shallow, mount } from 'enzyme';
import App from '../../../components/App/App';
import Users from '../../../containers/UsersContainer'
import UserHobbies from '../../../containers/UserHobbiesContainer'
import styles from "../../../components/app.module.scss";

describe('Testing App Component', () => {
  const app = shallow(<App/>);
  it('Renders App Component', () => {
    expect(app).toMatchSnapshot();
  });
  it('App Component has one heading class or not', () => {
    expect(app.find(`.${styles.heading}`).length).toEqual(1)
  });
  it('App Component has one container class or not', () => {
    expect(app.find(`.${styles.container}`).length).toEqual(1)
  });
  it('App Component contains Users component', () => {
    expect(app.contains(<Users/>)).toBe(true)
  });
  it('App Component contains Users Hobbies component', () => {
    expect(app.contains(<UserHobbies/>)).toBe(true)
  });
});