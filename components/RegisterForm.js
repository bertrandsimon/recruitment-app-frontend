import * as React from 'react';
import styles from '../styles/RegisterForm.module.css';

// STATES IMPORT
import { useState } from 'react';


// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// STYLES IMPORT

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';



function RegisterForm() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState('');

   const [formation, setFormation] = useState('');

  const handleFormationChange = (value) => {
    setFormation(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const isFormFilled = email;

  return (
  <div className={styles.container}>
  <Container maxWidth="sm">
    <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>

            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Téléphone" type="number" variant="outlined" onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Date de naissance"  variant="outlined" onChange={(e) => setName(e.target.value)} />
            </Grid>

          

            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Formation"
                    multiline
                    rows={8}
                    fullWidth
                  />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Experiences"
                    multiline
                    rows={8}
                    fullWidth
                  />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth id="outlined-basic" label="Hobbies"  variant="outlined" onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className={styles.connect}>
                    <Button sx={{ height: '99%' }} variant="contained" onClick={() => handleSubmit()} disabled={!isFormFilled}>Se Connecter</Button>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>

          
          </Grid>

    </Box>

    
   

    </Container>

  



  </div>
   
  );
}

export default RegisterForm;