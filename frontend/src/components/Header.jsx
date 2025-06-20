import React from "react";
import { MailCheck } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <MailCheck className="text-white" size={40} />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Bulk Email Sender
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your Excel files into powerful email campaigns with our
          modern extraction tool
        </p>
      </div>
    </div>
  );
};

export default Header;
