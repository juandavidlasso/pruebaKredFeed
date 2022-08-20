import React from 'react'
import { Container } from '@mui/material'
import RegisterForm from './components/user/registerForm'
import DataState from './components/context/dataState'
// Alerts
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Container fixed sx={{ bgcolor: '#ECF0F1'}}>
      <DataState>
        <RegisterForm />

        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
        />
      </DataState>
    </Container>
  );
}

export default App;
