import styles from '../../styles/JobCardsWrapper.module.css';
import JobCard from './JobCard';

function JobCardsWrapper() {


  return (

    <div className={styles.container}>

        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      
    </div>

  );
}

export default JobCardsWrapper;