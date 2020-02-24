import React from "react";
import { shallow } from 'enzyme';
import App from './components/App/App';

describe('Testing App Component', () => {
  it('Renders App Component', () => {
    const app = shallow(<App/>);
    expect(app).toMatchSnapshot();
  });

});