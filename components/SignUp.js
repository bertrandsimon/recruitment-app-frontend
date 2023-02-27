import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from '../styles/SignUp.module.css';

function SignUp() {
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
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        data.result && dispatch(login({ token: data.token, email }));
      });
  };

  return (
    <div className={styles.container}>
      
      <h3 className={styles.title}>Create your Gedimat account</h3>

      <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </div>

      <div>
        
      </div>

      <div>
        
      </div>

      <Input type="text" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={username} placeholder="Email" />
      <Input type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <Button className={styles.button} onClick={() => handleSubmit()}>Sign up</Button>

      <Button className={styles.button} onClick={() => handleSubmit()}>Sign Up with Gmail</Button>
        <Image src="/logoGmail.png" alt="Logo" width={20} height={20} />
      <Button className={styles.button} onClick={() => handleSubmit()}>Sign Up with LinkedIn</Button>
        <Image src="/logoLinkedin.png" alt="Logo" width={20} height={20} />

    </div>
  );
}

export default SignUp;
