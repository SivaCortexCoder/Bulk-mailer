import React from 'react'
import logotext from '../assets/images/logotext.png'

const Footer = () => {
  return (
    <div>
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-white mt-5">
    <div className="flex flex-col md:flex-row items-start gap-2 py-10 border-b border-gray-500/30">
        
        <div className="max-w-96">
            <img className="h-9" src={logotext} alt="dummyLogoDark"/>
            <p className="mt-6 text-sm text-gray-500">
                Transform your Excel files into powerful email campaigns with our modern extraction tool.
            </p>

        </div>

       

    </div>
    <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2025 © Company name. All Right Reserved.
    </p>
</footer>
    </div>
  )
}

export default Footer