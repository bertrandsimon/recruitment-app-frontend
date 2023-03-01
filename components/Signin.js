import * as React from 'react';

// STATES IMPORT
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// REDUCERS
import { loggedStatus } from '../reducers/user';
import { loggedName } from '../reducers/user';

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

  const handleSubmit = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch(loggedStatus())
        dispatch(loggedName(data.name))
        props.handleCloseModal();
        //data (({ email: data.email }));
      });
  };

  //console.log(email)
  //console.log(password)
  


  return (
    <div className={styles.container}>

      <div>
        <h3 className={styles.title}>Je me connecte</h3>
      </div>

      <div className={styles.email}>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className={styles.password}>
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className={styles.connect}>
        <Button sx={{ height: '99%' }} variant="contained" onClick={() => handleSubmit()}>Se Connecter</Button>
      </div>

    </div>
  );
}

export default Signin;
