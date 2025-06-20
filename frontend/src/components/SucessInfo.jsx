import React from "react";
import { CheckCircle } from "lucide-react";

const SucessInfo = ({email,filename}) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
            <CheckCircle className="text-white" size={16} />
          </div>
          <p className="font-base text-black">
            Sucessfully extracted{" "}
            <span className="text-green-700">{email.length}</span> Emails from your
            Excel file <span className="text-green-700">{filename}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SucessInfo;
