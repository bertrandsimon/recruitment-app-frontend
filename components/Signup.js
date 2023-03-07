import * as React from 'react';

// STATES IMPORT
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// STYLES IMPORT
import styles from '../styles/Signup.module.css';


function Signup() {
 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  
  const handleSubmit = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
       //data.result (({ token: data.token, email: data.email }));
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
  const isFormFilled = name && surname && email && password && isEmailValid;



  return (
  <div className={styles.container}>

    <div>
      <h3 className={styles.title}>Je crée mon compte</h3>
    </div>

    <div className={styles.email}>
      <TextField id="outlined-basic" label="Nom" variant="outlined" onChange={(e) => setName(e.target.value)} />
    </div>

    <div className={styles.email}>
      <TextField id="outlined-basic" label="Prénom" variant="outlined" onChange={(e) => setSurname(e.target.value)} />
    </div>

    <div className={styles.email}>
      <TextField label="Email" variant="outlined" value={email} onChange={handleEmailChange} error={!isEmailValid} helperText={!isEmailValid ? "Email non valide" : ""}/>
    </div>

    <div className={styles.password}>
      <TextField id="outlined-basic" label="Mot de passe" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <div className={styles.register}>
      <Button sx={{ height: '99%' }} variant="contained" onClick={() => handleSubmit()} disabled={!isFormFilled}>S'enregistrer</Button>
    </div>


  </div>
   
  );
}

export default Signup;