import styles from '../../styles/JobCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


function JobCard() {


  return (

    <div className={styles.JobCardContainer}>
      
      <div className={styles.headerWrapper}>
        <div><h5>Job title</h5></div>
        <div className={styles.heart}><FontAwesomeIcon icon={faHeart} className="far" /></div>
      </div>

      <div className={styles.subWrapper}>
        <div><Image src="/images/job-card-img.jpg" width={75} height={75} className={styles.arrow}/></div>
        <div className={styles.titleWrapper}>
          <div><span>Subtitle CP</span></div>
          <div className={styles.line}> </div>
          <div className={styles.tag}>CDI</div>
        </div>
      </div>

      <div className={styles.textWrapper}>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores omnis autem distinctio id et laudantium voluptates dicta cumque...</span>
      </div>

      <div>
        <span className={styles.dateFrom}>posté : 1 jour</span>
      </div>

   
    </div>

  );
}

export default JobCard;