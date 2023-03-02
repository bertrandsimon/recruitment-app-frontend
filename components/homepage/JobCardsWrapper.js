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
        const filteredDatas = data.allOffers.filter(job => job.title === 'Magasinier Vendeur');
        setJobsData(filteredDatas);
        dispatch(jobsCount(data.allOffers.length))
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