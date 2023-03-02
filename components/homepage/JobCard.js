import styles from '../../styles/JobCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


function JobCard(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = useSelector((state) => state.user.token);
  //console.log('token is =', token)
  const handleApply = (token, id) => {
    fetch('http://localhost:3000/jobs/applied', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, id }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        handleClose();

      });
    //console.log('clicked token is =', token)
    //console.log('clicked job id is =', idJob)
  };

  return (

    <div className={styles.jobCardContainer}>
      
      <div className={styles.headerWrapper}>
        <div onClick={handleClickOpen}><h5>{props.title}</h5></div>
        <div className={styles.heart}><FontAwesomeIcon icon={faHeart} className="far" /></div>
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

        <div className={styles.ctaWhite} onClick={() => handleApply(token, props._id)}><span>Je postule</span></div>


        <div>
          
          <span className={styles.dateFrom}>{props.date}</span>
        </div>
        </div>

        </DialogContent>
  
      </Dialog>
   
    </div>

  );
}

export default JobCard;