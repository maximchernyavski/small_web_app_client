import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import './action_button.css'
import { Alert, Snackbar } from '@mui/material';
import {useAuth} from "../router/AuthProvider"

const Authorization = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [alertType, setAlert] = useState('info')
  const regex = /^(\w+[^@\t\s\n\\e\\0.,_:])$/
  const navigate = useNavigate()
  const {setToken} = useAuth()

  const handleLoginInput = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const handlePasswordInput = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSnackbarClose = useCallback((event) => {
    setOpen(false);
  }, [])

  const handleSignInClick = useCallback(async () => {
    if (!login || !password) {
      setOpen(true)
      setMessage("Login and Password should be filled.")
      setAlert('error')
      return
    }
    if ((login.search(regex) !== 0 || password.search(regex) !== 0) && (login || password)) {
      setOpen(true)
      setMessage("Login or Password contains banned symbols such as whitespace, tab, newline, nullcharacter, dot, coma, ':'.")
      setAlert('error')
      return
    }

    const response = await fetch('http://localhost:8080/auth', {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    
    if (response.status === 200) {
      const data = await response.json()
      setToken(data.token)
      navigate('/blog', {replace: true})
      return
    }
    // проверка пароля
    // send to API and check response
  }, [login, password]);

  return (
  <>
    <input
        id="login"
        className="input"
        placeholder="User ID"
        type="text"
        value={login}
        onInput={handleLoginInput}
    />
    <input
        id="password"
        className="input"
        placeholder="Password"
        type="password"
        value={password}
        onInput={handlePasswordInput}
    />
    <Button id="sign_in" className='action_button' variant='contained' onClick={handleSignInClick}>Sign In</Button>
    <Snackbar open={open} autoHideDuration={4000} onClose={handleSnackbarClose}>
      <Alert onClose={handleSnackbarClose} severity={alertType}>{message}</Alert>
    </Snackbar>
  </>
  );
};

export default Authorization