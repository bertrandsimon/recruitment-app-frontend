import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import Signin from './Signin';
import Signup from './Signup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// REDUCERS
import { loggedStatus, loggedName, loggedToken } from '../reducers/user';


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

function Menu() {
  const userLoggedStatus = useSelector((state) => state.user.userConnected)
  const username = useSelector((state) => state.user.name)

  //console.log('userLoggedStatus', userLoggedStatus)
  //console.log('username', username)
  
  const dispatch = useDispatch();

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
    dispatch(loggedToken(''))
  }

  const handleSigninChoice = () => {setLoginChoice('signin')};
  const handleSignUpChoice = () => {setLoginChoice('signup')};



  //console.log(loginChoice)

  return (

    <div className={styles.container}>

        <div className={styles.logo}><Image src="/images/gedimat-logo.png" alt="avatar" width={190} height={75} /></div>
        
        <div className={styles.menuContainer}>
          {/* <div><h4>Opportunités</h4></div>
          <div> | </div>
          <div><h4>Carrières</h4></div>
          <div> | </div>
          <div><h4>Contact</h4></div> */}
          <div>  </div>
          {userLoggedStatus === false && <div className={styles.ctaWhite} onClick={handleClickOpen} ><span>Connection</span></div>}
          {userLoggedStatus === true && <div className={styles.connectionArea}>
            <span>Connecté {username}</span>

            <Tooltip title="Se déconnecter">
              <IconButton>
                <FontAwesomeIcon icon={faRightFromBracket} className={styles.ctaLogout} onClick={handleLogout}/>
              </IconButton>
            </Tooltip>
           
            </div>}
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
         
          {loginChoice === 'signin' && <Signin handleCloseModal={handleCloseModal}/>}
          {loginChoice === 'signup' && <Signup />}

        
        </div>
         

        </DialogContent>
  
      </Dialog>
      
    </div>

  );
}

export default Menu;