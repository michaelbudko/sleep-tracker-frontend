import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import Auth from '../Auth/Auth';


const Sleep = () => {
  const [numDays, setNumDays] = useState(7);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [riseTime, setRiseTime] = useState('');
  const [numCoreSleep, setNumCoreSleep] = useState([0,0,0]);
  const [numInsomniaSleep, setNumInsomniaSleep] = useState([0,0,0]);
  const [numGoodSleep, setNumGoodSleep] = useState([0,0,0]);
  const [avgSleepTime, setAvgSleepTime] = useState([0,0,0]);
  const [avgTimeInBed, setAvgTimeInBed] = useState([0,0,0]);
  const [avgSleepEfficiency, setAvgSleepEfficiency] = useState([0,0,0]);
  const [avgSleepQuality, setAvgSleepQuality] = useState([0,0,0]);
  const [numDaysWithinRiseTime, setNumDaysWithinRiseTime] = useState([0,0,0]);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in', user.displayName);

        setLoggedIn(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://get-form-responses-4ydnoxgsaa-uc.a.run.app/');
            const data = await response.data;
            console.log(data)
            setNumDays(data.num_responses);
            setDateFrom(data.date_from);
            setDateTo(data.date_to);
            setAvgSleepEfficiency(data.avg_sleep_efficiency);
            setAvgSleepQuality(data.avg_sleep_quality);
            setAvgTimeInBed(data.avg_time_in_bed);
            setAvgSleepTime(data.avg_sleep_time);
            setNumCoreSleep(data.num_core_sleep_nights);
            setNumGoodSleep(data.num_good_sleep_nights);
            setNumInsomniaSleep(data.num_insomnia_nights);
            setNumDaysWithinRiseTime(data.num_woke_up_desired_time_nights);
            setRiseTime(data.desired_rise_time);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
    
        fetchData();
      } else {
        // User is signed out
        setLoggedIn(false);
        console.log('User is signed out');
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        <Button className='mt-4' onClick={() => {navigate('add-log')}}>Add Sleep Log</Button>
      </div>
      <div className="sleep-container text-center">
        <div className="text-center d-flex align-items-center justify-content-center mb-3">
          <div className='d-inline-block'>
            <form>
              <label>
                Desired Rise Time:
                <input
                  type="text"
                  value={riseTime + 'am'}
                />
              </label>
            </form>
          </div>
          <div className="d-inline-block date-range m-2">
            <h3 style={{whiteSpace:'nowrap'}}>{numDays} Days: from {dateFrom} to {dateTo}</h3>
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Now</th>
              <th>1 Day Ago</th>
              <th>1 Week Ago</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="info text-start ps-5 pt-3">
                  <th>Number of Core Nights of Sleep:</th>
                </div>
              </td>
              <td> {numCoreSleep[0]}</td>
              <td>{numCoreSleep[1]}</td>
              <td>{numCoreSleep[2]}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Number of Insomnia Nights:</th>
                  </div>
              </td>
              <td> {numInsomniaSleep[0]}</td>
              <td>{numInsomniaSleep[1]}</td>
              <td>{numInsomniaSleep[2]}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Number of Nights of Good Sleep:</th>
                  </div>
              </td>
              <td> {numGoodSleep[0]}</td>
              <td>{numGoodSleep[1]}</td>
              <td>{numGoodSleep[2]}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Average Sleep Time:</th>
                  </div>
              </td>
              <td>{avgSleepTime[0]?.toFixed(2)}</td>
              <td>{avgSleepTime[1]?.toFixed(2)}</td>
              <td>{avgSleepTime[2]?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Average Time in Bed:</th>
                  </div>
              </td>
              <td>{avgTimeInBed[0]?.toFixed(2)}</td>
              <td>{avgTimeInBed[1]?.toFixed(2)}</td>
              <td>{avgTimeInBed[2]?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Average Sleep Efficiency:</th>
                  </div>
              </td>
              <td>{(avgSleepEfficiency[0] * 100)?.toFixed(2)}%</td>
              <td>{(avgSleepEfficiency[1] * 100)?.toFixed(2)}%</td>
              <td>{(avgSleepEfficiency[2] * 100)?.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Average Sleep Quality:</th>
                  </div>
              </td>
              <td>{avgSleepQuality[0]?.toFixed(2)}</td>
              <td>{avgSleepQuality[1]?.toFixed(2)}</td>
              <td>{avgSleepQuality[2]?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>
                  <div className="info text-start ps-5 pt-3">
                      <th>Number of Days Within Rise Time:</th>
                  </div>
              </td>
              <td>{numDaysWithinRiseTime[0]}</td>
              <td>{numDaysWithinRiseTime[1]}</td>
              <td>{numDaysWithinRiseTime[2]}</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      {!loggedIn && <Auth/>}
    </div>
  );
};

export default Sleep;
