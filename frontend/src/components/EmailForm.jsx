import React from "react";
import { Send } from "lucide-react";

const EmailForm = ({
  subject,
  email,
  handleSubject,
  handleMessage,
  message,
  sendMessage,
  sucess,
  failure,
}) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-green-200 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Compose Your Email</h3>
        </div>

        <div className="grid gap-6">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Subject Line
            </label>
            <input
              id="subject"
              onChange={handleSubject}
              value={subject}
              type="text"
              placeholder="Enter subject..."
              className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Message Content
            </label>
            <textarea
              id="message"
              onChange={handleMessage}
              value={message}
              placeholder="Enter message here..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white/70 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={sendMessage}
            disabled={!subject.trim() || !message.trim() || email.length === 0}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="mr-2" size={18} />
            Send Email
          </button>
        </div>

        {(sucess !== null || failure !== null) && (
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Email Delivery Report:
            </p>
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-semibold">
                Total: {email.length ?? 0}
              </span>
              <span className="text-green-600 font-semibold">
                Success: {sucess ?? 0}
              </span>
              <span className="text-red-600 font-semibold">
                Failed: {failure ?? 0}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailForm;
