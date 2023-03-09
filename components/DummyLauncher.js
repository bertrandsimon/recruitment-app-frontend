import styles from '../styles/DummyLauncher.module.css';
import Image from 'next/image';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// REDUCERS
import { loggedStatus } from '../reducers/user';
import { loggedName } from '../reducers/user';

// STATES IMPORT

import { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';

// REDUCERS
import user from '../reducers/user';

// MUI IMPORTS
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import RegisterForm from './RegisterForm';
import SuperSkills from './SuperSkills';

function DummyLauncher() {
  
  
  const userLoggedStatus = useSelector((state) => state.user.userConnected)
  const username = useSelector((state) => state.user.name)

  const [open, setOpen] = useState(false);
  const [loginChoice, setLoginChoice] = useState('signin');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(loggedStatus())
    dispatch(loggedName(''))
  }

  const handleSigninChoice = () => {setLoginChoice('signin')};
  const handleSignUpChoice = () => {setLoginChoice('signup')};



  //console.log(loginChoice)

  return (

    <div className={styles.container}>

        <div className={styles.logo}></div>
        
        <div className={styles.menuContainer}>
         
          {userLoggedStatus === false && <div className={styles.ctaWhite} onClick={handleClickOpen} ><span>Connexion</span></div>}
          {userLoggedStatus === true && <div className={styles.connectionArea}>
            <span>Connecté {username}</span>

            </div>}
        </div>


        
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

        {/* <SuperSkills/> */}
          <RegisterForm/>

  
        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default DummyLauncher;