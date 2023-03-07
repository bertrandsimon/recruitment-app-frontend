import styles from '../../styles/JobCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import {applyJob} from '../../reducers/applyReducer';
import Signup from '../Signup';

function JobCard(props) {

  
  const appliedJobs = useSelector((state) => state.applyReducer.value);
  const isConnected = useSelector((state) => state.user.userConnected);


  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenRegister(false);
  };

  const handleRegister = () => {
    setOpenRegister(true);
  };

  const token = useSelector((state) => state.user.token);
 
  
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

  
  return (

    <div className={styles.jobCardContainer}>
    
      <div className={styles.headerWrapper}>
        <div onClick={handleClickOpen}><h5>{props.title}</h5></div>
        <div className={styles.heart}><Tooltip title="Mettre en favori"><FontAwesomeIcon icon={faHeart} className="far" /></Tooltip></div>
      </div>

      <div className={styles.subWrapper}>
        <div><Image src={props.jobImage} width={100} height={100} style={{ borderRadius: '6px' }}/></div>
        <div className={styles.titleWrapper}>
          <div><span>Subtitle CP</span></div>
          <div className={styles.line}> </div>
          <div className={styles.tag}>CDI</div>
        </div>
      </div>

      <div className={styles.textWrapper}>
        <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        
      </div>

      <div>
        <span className={styles.dateFrom}>{props.date}</span>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

        {openRegister ? (
            <Signup/>
          ) : (
            <div className={styles.jobCardContainerModal}>
            <div className={styles.headerWrapper}>
              <div><h5>{props.title}</h5></div>
              <div className={styles.heart}><FontAwesomeIcon icon={faHeart} className="far" /></div>
            </div>
  
          <div className={styles.subWrapper}>
            <div><Image src={props.jobImage} width={75} height={75} style={{ borderRadius: '6px' }}/></div>
            
            <div className={styles.titleWrapper}>
              <div><span>Subtitle CP</span></div>
              <div className={styles.line}> </div>
              <div className={styles.tag}>CDI</div>
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
  
          <div>
  
          {isConnected ? (
  
              <div>
                {isJobApplied ? (
                  <div className={styles.ctaWhiteInactive}><span>Déja postulé</span></div>
                ) : (
                  <div className={styles.ctaWhite} onClick={() => handleApply(token, props._id)}><span>Je postule</span></div>
                )}
              </div>
  
            ) : (
              <div className={styles.ctaWhite2} onClick={() => handleRegister()}><span>Créer un compte pour postuler</span></div>
            )}
  
          </div>
  
          </div>

          )}

       

        </DialogContent>
  
      </Dialog>
   
    </div>

  );
}

export default JobCard;