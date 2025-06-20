import React, { useState } from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CredentialsForm from './components/CredentialsForm';

const App = () => {
  const [showForm,setShowForm] = useState(false)

  const BASE_URL = "https://bulk-mailer-9a7f.onrender.com"

  return (
    <div className='font-roboto bg-gray-100  min-h-screen relative'>
      <Navbar setShowForm={setShowForm}/>

      {
        showForm && 
         <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 '>
        <CredentialsForm setShowForm={setShowForm} BASE_URL={BASE_URL} />
          </div>
      }

      
      <Home BASE_URL={BASE_URL}/>
      <ToastContainer />
      <Footer/>
    </div>
  )
}

export default App