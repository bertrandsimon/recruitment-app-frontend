import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import JobCard from './homepage/JobCard';
import Signin from './Signin';
import Signup from './Signup';

// STATES IMPORT
import { useState } from 'react';

// MUI IMPORTS
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


function Menu() {

  const [open, setOpen] = useState(false);
  const [loginChoice, setLoginChoice] = useState('signin');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSigninChoice = () => {setLoginChoice('signin')};
  const handleSignUpChoice = () => {setLoginChoice('signup')};

  console.log(loginChoice)

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

          

        <div className={styles.modalContainer}>

          <div className={styles.tabsWrapper}>
              <span className={styles.choice} onClick={handleSigninChoice}>J'ai déja un compte</span>
              <span className={styles.choice} onClick={handleSignUpChoice}> Je crée un compte</span>
          </div>
          <div className={styles.line}></div>
         
          {loginChoice === 'signin' && <Signin />}
          {loginChoice === 'signup' && <Signup />}

        
        </div>
         

        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default Menu;