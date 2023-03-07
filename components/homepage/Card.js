import styles from '../../styles/Card.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';

function Card(props) {

  const appliedJobs = useSelector((state) => state.applyReducer.value);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = (token, id) => {
   
    fetch('http://localhost:3000/jobs/applied', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token:token, idJob:id }),
    }).then(response => response.json())
      .then(data => {

       dispatch(applyJob(id)); 
        handleClose(); 
      })
      .catch(error => {
        console.log(error); // Log any errors that occur
      });
   
  };

  const isJobApplied = appliedJobs.includes(props._id);

  const postDate = new Date(props.date); // Current date
  const currentDate = new Date();
  const daysAgo = Math.floor((currentDate - postDate) / (1000 * 60 * 60 * 24)); // Calculate the number of days since the post date
  

  return (

    <div className={styles.cardWrapper}>
        
        <h5>{props.title}</h5>

        <div className={styles.tagWrapper}>
        
              
        
          <div className={styles.tag1}><Tooltip title={props.contract.type}><span>{props.contract.type.substring(0, 5)}</span></Tooltip></div>
          <div className={styles.tag2}><Tooltip title={props.store.storeName}><span>{props.store.postalCode.substring(0, 2)}</span></Tooltip></div>
        </div>

        <div className={styles.txt}>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.bottomWrapper}>
          <div ><span className={styles.day}>posté : {daysAgo} jour{daysAgo === 1 ? '' : 's'}</span></div>
          <div className={styles.ctaWhiteSmall} onClick={handleClickOpen}> voir </div>
        </div>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

        <div className={styles.jobCardContainerModal}>
          <div className={styles.headerWrapper}>
            <div><h5>{props.title}</h5></div>
            <div className={styles.heart}><FontAwesomeIcon icon={faHeart} className="far" /></div>
          </div>

        <div className={styles.subWrapper}>
          <div><Image src="/images/job-card-img.jpg" width={75} height={75} className={styles.arrow}/></div>
          <div className={styles.titleWrapper}>
            <div><span>{props.store.postalCode} {props.store.storeName}</span></div>
            <div className={styles.line}> </div>
            <div className={styles.tag}><Tooltip title={props.contract.type}><span style={{ color: 'black !important' }}>{props.contract.type.substring(0, 5)}</span></Tooltip></div>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Description</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Missions</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Profil</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.textTitle}>Modalités de contrat</span>
          <div className={styles.lineModal}> </div>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.ctaWhite} onClick={() => handleApply(token, props._id)}><span>Je postule</span></div>


      
        </div>

        </DialogContent>
  
      </Dialog>

      
    </div>

  );
}

export default Card;