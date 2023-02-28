import styles from '../../styles/Card.module.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function Card(props) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div className={styles.cardWrapper}>

        <h5 onClick={handleClickOpen}>{props.title}</h5>

        <div className={styles.tagWrapper}>
          <div className={styles.tag1}><span>CDI</span></div>
          <div className={styles.tag2}><span>78</span></div>
        </div>

        <div className={styles.txt}>
          <span>{props.description && <p>{props.description.slice(0, 140)}{props.description.length > 140 ? '...' : ''}</p>}</span>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.lineDashed}>  </div>
          <div className={styles.day}><span>posté : 1 jour</span></div>
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

        <div className={styles.ctaWhite}><span>Je postule</span></div>


        <div>
          
          <span className={styles.dateFrom}>{props.date}</span>
        </div>
        </div>

        </DialogContent>
  
      </Dialog>

      
    </div>

  );
}

export default Card;