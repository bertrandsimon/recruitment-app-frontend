import styles from '../../styles/JobCardsWrapper.module.css';
import JobCard from './JobCard';

import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function JobCardsWrapper() {

  const [jobsData, setJobsData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => {
        
        setJobsData(data.jobs);
        //console.log('jobsData :', jobsData)
      });
  }, []);

  const jobCard = jobsData.map( (data,i) => {
    return <JobCard key={i} {...data} />
  })

  return (

    <div className={styles.container}>
      
      {jobCard}
      <JobCard onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

        <div>
        <h1>TEST</h1>
        </div>

        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default JobCardsWrapper;