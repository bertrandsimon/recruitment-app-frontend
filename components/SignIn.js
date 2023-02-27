import * as React from 'react';


import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from '../styles/SignIn.module.css';


function SignIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  // Redirect to /home if logged in
  const router = useRouter();
  if (user.token) {
    router.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        data.result && dispatch(login({ token: data.token, email: data.email }));
      });
  };

  return (
    <div className={styles.container}>
      
      <h3 className={styles.title}>Connect to your Gedimat account</h3>
      <Input type="text" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
      <Input type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <Button className={styles.button} onClick={() => handleSubmit()}>Sign in</Button>
    </div>
  );
}

export default SignIn;
