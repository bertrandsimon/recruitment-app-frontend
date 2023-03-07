import * as React from 'react';

// STATES IMPORT
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// REDUCERS
import { loggedName, loggedToken, loggedStatus } from '../reducers/user';

// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// STYLES IMPORT
import styles from '../styles/Signin.module.css';

function Signin(props) {
 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);


  const handleSubmit = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
       
        dispatch(loggedStatus())
        dispatch(loggedName(data.name))
        dispatch(loggedToken(data.token))
      
        props.handleCloseModal();

      });
  };


  //Check email's validation
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  //Disabled only if we have all the required information
  const isFormFilled = email && password && isEmailValid;

  
  return (
    <div className={styles.container}>

      <div>
        <h3 className={styles.title}>Je me connecte</h3>
      </div>

      <div className={styles.email}>
      <div className={styles.email}>
        <TextField label="Email" variant="outlined" value={email} onChange={handleEmailChange} error={!isEmailValid} helperText={!isEmailValid ? "Email non valide" : ""}/>
      </div>
      </div>

      <div className={styles.password}>
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className={styles.connect}>
        <Button sx={{ height: '99%' }} variant="contained" onClick={() => handleSubmit()} disabled={!isFormFilled}>Se Connecter</Button>
      </div>

    </div>
  );
}

export default Signin;
