import styles from '../../styles/JobCardsWrapper.module.css';
import JobCard from './JobCard';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { jobsCount } from '../../reducers/jobs';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function JobCardsWrapper() {

  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const jobSelectedInReducer = useSelector((state) => state.jobs.searchedJobName);

  useEffect(() => {
    fetch('https://jobimat-backend-final.vercel.app/jobs')
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

  const startIndex = (currentPage - 1) * 12;
  const endIndex = startIndex + 12;

  // Slice the jobCards array to display only the jobs for the current page
  const jobCards = jobsData.slice(startIndex, endIndex).map((data, i) => {
    return <JobCard key={i} {...data} />
  });

  const totalPages = Math.ceil(jobsData.length / 12);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (

    <div className={styles.container}>

      <div className={styles.cardsContainer}>
        {jobCards}
      </div>

      <Stack spacing={2}>
        <Pagination count={totalPages} variant="outlined" shape="rounded" page={currentPage} onChange={handlePageChange} />
      </Stack>

    </div>


  );
}

export default JobCardsWrapper;