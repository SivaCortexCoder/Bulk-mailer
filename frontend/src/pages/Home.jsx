import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import InstructionArea from "../components/InstructionArea";
import SucessInfo from "../components/SucessInfo";
import EmailForm from "../components/EmailForm";


const Home = ({BASE_URL}) => {
  const [filename, setFileName] = useState(null);
  const [email, setEmails] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sucess, setSucess] = useState(null);
  const [failure, setFailure] = useState(null);

 

 
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const ReadingFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      if (jsonData.length === 0) {
        setEmails([]);
        return;
      }

      const firstRow = jsonData[0];
      const emailColumnKey = Object.keys(firstRow).find((key) =>
        key.toLowerCase().includes("email")
      );

      if (!emailColumnKey) {
        toast.error("No email column found. Please ensure your sheet has a column containing email in its title.")
        setEmails([]);
        return;
      }

      const extractedEmails = jsonData
        .map((row) => row[emailColumnKey])
        .filter((email) => typeof email === "string" && email.includes("@"));

      console.log(extractedEmails);
      setEmails(extractedEmails);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFileName(file.name);
    ReadingFile(file);
  };

const sendMessage = () => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/sendmail`, {
      emailList: email,
      subject: subject,
      text: message,
    })
    .then((res) => {
      const { successCount, failureCount } = res.data;
      setSucess(successCount);
      setFailure(failureCount);
      
      
      if (successCount > 0 && failureCount === 0) {
        toast.success(`All ${successCount} emails sent successfully!`);
      } else if (successCount > 0 && failureCount > 0) {
        toast.warning(`${successCount} emails sent, ${failureCount} failed`);
      } else {
        toast.error("No emails were sent successfully");
      }
    })
    .catch((err) => {
      toast.error(err.response?.data?.message || "Failed to send email");
    })
    .finally(() => {
      setIsLoading(false);
    });
}

  return (
    <div className="max-w-7xl mx-auto  p-6 bg-white rounded-lg shadow-sm">
   
      
      
      {email.length === 0 && <Header /> }

      {email.length === 0 && <UploadSection handleFileUpload={handleFileUpload} />}

      {email.length > 0 && (
        <>
          <SucessInfo email={email} filename={filename} />

          {isLoading ? (
            <Loading />
          ) : (
            <EmailForm
              handleSubject={handleSubject}
              handleMessage={handleMessage}
              subject={subject}
              email={email}
              message={message}
              sendMessage={sendMessage}
              sucess={sucess}
              failure={failure}
              
            />
          )}
        </>
      )}
      {email.length === 0 && <InstructionArea /> }
      
    </div>
  );
};

export default Home;
