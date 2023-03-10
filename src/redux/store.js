import {configureStore} from '@reduxjx/toolkit';
import { createLogger } from 'redux-logger';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';


const logger = createLogger({
    // Options for the logger can be passed here
    // Show only the actions in the console
    predicate: (getState, action) => action.type !== 'SOME_ACTION',
    // Collapse the logs by default
    collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  });


  export const store = configureStore ({
      reducer: {
          missions: missionReducer,
          rockets:rocketReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  }) 

  export default store;
