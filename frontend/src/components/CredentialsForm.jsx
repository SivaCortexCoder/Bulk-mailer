import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CredentialsForm = ({ setShowForm,BASE_URL }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };


  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const sendData = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/admin`, { email, password })
      .then((res) => {
        toast.success(res.data.message);
        setShowForm(false); 
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || 'Failed to save credentials');
      });
  };

  return (
    <form
      onSubmit={sendData}
      className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl flex justify-between items-center font-semibold mb-2 text-center text-gray-800">
        Set Credentials
        <span
          onClick={() => setShowForm(false)}
          className="cursor-pointer text-sm"
        >
          X
        </span>
      </h2>

      <input
        onChange={handleEmail}
        value={email}
        id="email"
        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:border-2 focus:border-black"
        type="email"
        placeholder="Enter your email"
        required
      />

      <input
        onChange={handlePassword}
        value={password}
        id="password"
        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:border-2 focus:border-black"
        type="password"
        placeholder="Enter your password"
        required
      />

      <button
        type="submit"
        className="w-full my-3 cursor-pointer bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
      >
        Save
      </button>
    </form>
  );
};

export default CredentialsForm;
