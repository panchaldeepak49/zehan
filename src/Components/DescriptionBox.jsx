import React,{ useState } from 'react'


const Descriptionbox = ({description= '',setDescription,characterLimitExceeded,setCharacterLimitExceeded}) => {

    // const [description, setDescription] = useState('');
    
    const maxCharacterCount = 250;
    const [characterCount, setCharacterCount] = useState(description.length);
    // const [characterLimitExceeded, setCharacterLimitExceeded] = useState(false);
    

  const handleChange = (event) => {
    const inputValue = event.target.value;
    
    if (inputValue.length <= maxCharacterCount) {
      const sanitizedInput = inputValue.replace(/\s+/g, ' ');
      setDescription(sanitizedInput);
      setCharacterCount(sanitizedInput.length);
      setCharacterLimitExceeded(false);
    }else{
      setCharacterLimitExceeded(true);
    }
    //setDescription(event.target.value);
  };
  const initialDescription = description || ''; 

  return (
    <>
     <div>
      {/* <p className='font-[0.75rem] ml-[1.5rem]'>Video Description</p> */}
      <textarea
      className='w-[90%] bg-[#ffffff] ml-[6.0rem] mt-[1rem] rounded-md'
        value={initialDescription}
        onChange={handleChange}
        placeholder="Message"
        rows="5"
        cols="50"
      />

      <div className='font-[0.75rem] ml-[2rem] -mt-[1rem]'>
        {/* <strong>Description:</strong> */}
        <p className='text-[0.75rem] mt-[1rem] ml-[4rem]'>Character Count: {characterCount}/{maxCharacterCount}</p>
        {characterLimitExceeded && (
            <p className='font-[0.75rem] text-red-500 -mt-[0.5rem] ml-[4rem]'>250 characters limit!</p>
          )}
      </div>
    </div>
  
    </>
  )
}

export default Descriptionbox