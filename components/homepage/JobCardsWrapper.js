import styles from '../../styles/JobCardsWrapper.module.css';
import JobCard from './JobCard';

import { jobsCount } from '../../reducers/jobs';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function JobCardsWrapper() {

  const [jobsData, setJobsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        
        setJobsData(data.allOffers);
        dispatch(jobsCount(data.allOffers.length))
        //console.log(data.allOffers.length)
        //console.log('jobsData :', jobsData)
      });
  }, []);

  const jobCard = jobsData.map( (data,i) => {
    return <JobCard key={i} {...data} />
  })

  return (

    <div className={styles.container}>
      
      {jobCard}
     
      
    </div>

  );
}

export default JobCardsWrapper;