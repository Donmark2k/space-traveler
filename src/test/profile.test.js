import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/profile';
import axios from 'axios';


it('renders correctly', () => {
    const tree = renderer
      .create(
        <React.StrictMode>
          <Provider store={myStore}>
            <BrowserRouter>
              <Profile />
            </BrowserRouter>
          </Provider>
        </React.StrictMode>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });