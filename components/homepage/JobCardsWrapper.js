import styles from '../../styles/JobCardsWrapper.module.css';
import JobCard from './JobCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { jobsCount } from '../../reducers/jobs';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function JobCardsWrapper() {

  const [jobsData, setJobsData] = useState([]);
  const dispatch = useDispatch();

  const jobSelectedInReducer = useSelector((state) => state.jobs.searchedJobName);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {

        if(jobSelectedInReducer){
        const filteredDatas = data.allOffers.filter(job => job.title === jobSelectedInReducer);
        setJobsData(filteredDatas);
        dispatch(jobsCount(data.allOffers.length))
        }
        else {
        setJobsData(data.allOffers);
        dispatch(jobsCount(data.allOffers.length))
        }

      });
  }, [jobSelectedInReducer]);



  const jobCards = jobsData.map( (data,i) => {
    return <JobCard key={i} {...data} />
  })

  return (

    <div className={styles.container}>

      {jobCards}

    </div>


  );
}

export default JobCardsWrapper;