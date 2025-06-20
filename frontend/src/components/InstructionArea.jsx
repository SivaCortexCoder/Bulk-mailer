import React from 'react';
import { CheckCircle, AlertCircle, Settings } from 'lucide-react';

const InstructionArea = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
       
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <CheckCircle size={24} />
            How to Use
          </h3>
          <ol className="space-y-3 text-blue-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></span>
              <span>In Credentials option, First Save Your Email and App Password which your like to send from</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></span>
              <span>Then, Select the File and send Emails.</span>
            </li>
          </ol>
        </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <CheckCircle size={24} />
            Important Notes
          </h3>
          <ol className="space-y-3 text-blue-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></span>
              <span>Only valid email addresses will be processed from your Excel file</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></span>
              <span>Large email lists may take some time to process</span>
            </li>
          </ol>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Settings size={24} />
          Email Configuration
        </h3>
        <p className="text-gray-600 mb-4">
          Before sending emails, you need to configure your email credentials. 
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Setting up Gmail App Password:</h4>
          <ol className="text-sm text-gray-600 space-y-1">
            <li>1. Go to your Google Account settings</li>
            <li>2. Enable 2-Factor Authentication if not already enabled</li>
            <li>3. Go to Security → App passwords</li>
            <li>4. Generate a new app password for "Mail"</li>
            <li>5. Use this app password in the credentials form</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InstructionArea;