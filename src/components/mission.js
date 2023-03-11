import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux';
import { Badge } from 'react-bootstrap/Badge';
import { fetchMissions } from './../redux/missions/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const status = useSelector((state)=>state.missions.status);
  const missions = useSelector((state)=> state.missions.missionList);
  useEffect(() => {
    if (status==="idle") {
      dispatch(fetchMissions());
    }
  },[status, dispatch])

  return (
    
  )
}

export default Mission;
