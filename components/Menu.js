import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import JobCard from './homepage/JobCard';

// STATES IMPORT
import { useState } from 'react';

// MUI IMPORTS
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


function Menu() {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className={styles.container}>

        <div className={styles.logo}><Image src="/images/gedimat-logo.png" alt="avatar" width={190} height={75} /></div>
        
        <div className={styles.menuContainer}>
          <div><h4>Opportunités</h4></div>
          <div> | </div>
          <div><h4>Carrières</h4></div>
          <div> | </div>
          <div><h4>Contact</h4></div>
          <div>  </div>
          <div className={styles.ctaWhite} onClick={handleClickOpen}><span>Connexion</span></div>
        </div>


        
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

          

        <div>
        <JobCard/>
        </div>
         
        
           
         
        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default Menu;