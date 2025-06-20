import React from "react";
import { Upload } from "lucide-react";

const UploadSection = ({ handleFileUpload }) => {
  return (
    <div>
      <div className="mb-6 max-w-4xl mx-auto ">
        <label className="group flex flex-col items-center justify-center w-full h-48 border-3 border-dashed border-blue-300 rounded-2xl cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:border-blue-400">
          <div className="flex flex-col items-center justify-center pt-8 pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <p className="mb-2 text-lg font-semibold text-gray-700">
              <span className="text-blue-600">Click to upload</span> your Excel
              file
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Supports XLS & XLSX formats
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".xlsx,.xls"
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadSection;
