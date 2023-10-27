import React, { useState } from 'react';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const UploadFile = ({ resumeURL, setResumeURL }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [fileList, setFileList] = useState([]);
  //console.log(resumeURL) ;

  const props = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:5000/api/upload', // It needs to be changed with a valid backend API
    // headers: {
    //   Authorization: 'YourAuthorizationHeader', // Update this with your authorization header
    // },
    fileList: fileList,
    accept: '.pdf,.doc,.docx', // Specify accepted file types (PDF and Word documents)

    beforeUpload(file) {
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

      if (allowedTypes.includes(fileExtension)) {
        return true; // Allow only PDF and Word documents
      } else {
        message.error('Please upload a PDF or Word document.');
        return false; // Reject the file and don't add it to the fileList
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'uploading') {
        setFileList([info.file]);
      }
      //console.log(info.file);
      if (status === 'done') {
        setResumeURL(info.file.response.url);
        setIsImageUploaded(true);
        message.success(`${info.file.name} file uploaded successfully.`);
        setFileList([]);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setFileList([]);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


  return (
    <div className='w-[100%] h-[2rem] flex justify-start items-center mt-[1rem]'>
      <Dragger {...props} disabled={isImageUploaded} className='w-[70%] md:w-[80%] h-[1.35rem]  flex justify-center items-center'>
              {/* <span className='w-full text-[0.85rem]'>Choose File</span> */}
            <button className=' md:px-1 border-2 border-[#A1A1A1] rounded w-[90%] md:w-[100%] md:text-xs sm:text-[0.5rem] 
            text-[0.4rem] text-[#595959] absolute -mt-[0.95rem] -ml-[2rem] md:-ml-[4rem] '>Choose File</button>
        
      </Dragger>
    </div>
  );
};

export default UploadFile;