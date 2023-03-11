import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from './../components/rocket';
import { store } from './../redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { fetchRockets, reserveRocket } from './../redux/rockets/rocketSlice';
