import React, { useState } from 'react';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const UploadFile = ({ thumbnailURL, setThumbnailURL }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    multiple: false,
    action: 'https://admin.okomo360.com/api/utils/uploadFile', // It needs to be changed with a valid backend API
    headers: {
      Authorization: 'YourAuthorizationHeader', // Update this with your authorization header
    },
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
      if (status === 'done') {
        setThumbnailURL(info.file.response.url);
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
      <Dragger {...props} disabled={isImageUploaded} className='w-28 h-6  flex justify-center items-center'>
              {/* <span className='w-full text-[0.85rem]'>Choose File</span> */}
            <button className='px-1 border-2 border-[#A1A1A1] rounded w-[100%] md:text-xs sm:text-[0.5rem] 
            text-[0.4rem] text-[#595959] absolute -mt-[1rem] -ml-[3.5rem]'>Choose File</button>
        
      </Dragger>
    </div>
  );
};

export default UploadFile;