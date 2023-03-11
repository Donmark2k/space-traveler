import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import store from './redux/store';
import MyProfile from './components/MyProfile';
import App from './App';
import { fetchMissions, joinMission } from './redux/missions/MissionsSlice';
import { fetchRockets, reserveRocket } from './redux/rockets/RocketsSlice';
import Rockets from './components/Rockets';

it('App renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('NavBar page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
