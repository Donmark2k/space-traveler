import { React, renderer } from 'react';
import Mission from './../components/mission';
import { fetchMissions, joinMission } from '../redux/missions/missionSlice';
import axios from 'axios';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

it('Rocket page renders correctly', ()=>{
    const tree  = renderer
    .create (
        <Provider store ={store}>
        <Mission />
        </Provider>
    )
    .toJSON ();
    expect(tree).toMatchSnapshot();
})

describe('Mission redux state tests', () => {
    it('Should initially set Missions store to an empty Array', () => {
      const state = store.getState().missions;
      expect(state.missionList).toEqual([]);
    });
  
    it('should Join Mission payload send correct', () => {
      const expectedPayload = { payload: '9D1B7E0', type: 'missions/joinMission' };
      const actualPayload = joinMission('9D1B7E0');
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
  