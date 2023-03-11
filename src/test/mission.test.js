import React from 'react';
import Mission from '../components/mission';
import { fetchMissions, joinMission } from '../redux/missions/missionSlice';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import renderer from 'react-test-renderer';


it('Mission page renders correctly', ()=>{
    const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
})

describe('Mission redux state tests', () => {
    it('Should initially set Missions store to an empty Array', () => {
      const state = store.getState().missions;
      expect(state.missionList).toEqual([]);
    });
  
    it('should Join Mission payload send correct', () => {
      const expectedPayload = { payload: '9D1B7E5', type: 'missions/joinMission' };
      const actualPayload = joinMission('9D1B7E5');
      expect(actualPayload).toEqual(expectedPayload);
    });
  
    it('Mission fetch data from API', async () => {
      const url = 'https://api.spacexdata.com/v3/missions';
      const axiosSpy = jest.spyOn(axios, 'get');
      jest.setTimeout(90000);
      const dispatchSpy = jest.fn();
  
      await fetchMissions(url)(dispatchSpy);
  
      expect(axiosSpy).toHaveBeenCalledWith(url);
    });
  });
  