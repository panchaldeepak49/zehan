import React,{useState,useEffect} from 'react';
import hiringImg from '/Images/hiring.png';
import UploadFile from '../Components/UploadFile';
import { userRequest } from '../Components/RequestMethod';
import { message } from 'antd';

const Hiring = () => {

  const [name,setName] = useState('');
  const [nameTouched,setNameTouched] = useState(false);
  const [nameError,setNameError] = useState('');

  const [email,setEmail] = useState();
  const [emailTouched,setEmailTouched] = useState(false);
  const [emailError,setEmailError] = useState('');

  const [phone,setPhone] = useState();
  const [phoneTouched,setPhoneTouched] = useState(false);
  const [phoneError,setPhoneError] = useState('');

  const [resumeURL,setResumeURL] = useState('');

  const nameRegex = /^[A-Za-z]{2,50}( [A-Za-z]{2,50}){0,1}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
  // console.log(phone);

  const data = {
    name: name,
    email: email,
    mobile_number: phone,
    file_url: resumeURL,
  };

  const addHiring = async (e) => {
    setNameTouched(true);
    setEmailTouched(true);
    setPhoneTouched(true);

    if(!name.trim()){
      message.error('Please enter your name');
    }
    else if(!nameRegex.test(name)){
      message.error('Please enter correct name(with 2-50 char.)without space');
    }
    else if(!email.trim()){
      message.error('Please enter your email');
    }
    else if(!emailRegex.test(email)){
      message.error('Please enter a valid email');
    }
    else if(!phone.trim()){
      message.error('Please enter your contact number');
    }
    else if(!phoneRegex.test(phone)){
      message.error('Please enter a valid mobile number');
    }
    else{
    await userRequest.post("/api/hiring/create", data)
    .then(() => {
      message.success("Thank you for enrolling with us.");
      setName('');
      setNameTouched(false);
      setEmail('');
      setEmailTouched(false);
      setPhone('');
      setPhoneTouched(false);
      setResumeURL('')
    })
    .catch((err) => {
      const errorMessage = err.response?.data?.message || "An error occurred";
      message.error(errorMessage);
    });
  }}


  useEffect(()=>{

    if(nameTouched){
      if(!name.trim()){
        setNameError('Please enter your name');
      }
      else if(!nameRegex.test(name)){
        setNameError('Enter correct name with (2-50char.)')
      }
      else{
        setNameError('');
      }
    }

    if(phoneTouched){
      if(!phone?.trim()){
        setPhoneError('Please enter your phone number');
      }
      else if(!phoneRegex.test(phone)){
        setPhoneError('Enter phone with 10 digits')
      }
      else{
        setPhoneError('');
      }
    }

    if(emailTouched){
      if(!email?.trim()){
        setEmailError('Please enter your email id ');
      }
      else if(!emailRegex.test(email)){
        setEmailError('Enter a valid email address')
      }
      else{
        setEmailError('');
      }
    }
  },[name,nameTouched,phone,phoneTouched,email,emailTouched]);

  return (
    <>
     <img src={hiringImg}></img>

     <div className='absolute sm:-mt-[18%] -mt-[20%] ml-[43%]'>
    <p className='sm:text-[2.2rem] text-[1.5rem] text-white font-bold'>HIRING</p>
    <button className='-ml-[6%] px-2 py-1 sm:text-[1rem] text-[0.75rem] text-white bg-[#4739FF] rounded-md'>Home-Contact Us</button>
    </div>

     <div className='flex bg-[#FEF2E9]'>

        <div className='w-[50%]  flex flex-col justify-center'>
            <p className='ml-10 sm:ml-20 -mt-12 sm:text-[2rem] text-[1.5rem] font-semibold'>Get First Dibs.</p>
            <p className='ml-10 sm:ml-20 sm:mt-5 mt-3 sm:text-base text-sm sm:w-[80%] w-[65%]'>Copy Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>
        </div>

        <div className='w-[50%]  flex flex-col'>
            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Your Name*</label>
            <input type='text' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md' value={name}
            onChange={(e)=>setName(e.target.value)} onBlur={()=>setNameTouched(true)}></input>
            <span className='text-sm text-red-600'>{nameError}</span>

            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Your Email*</label>
            <input type='email' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md' value={email}
            onChange={(e)=>setEmail(e.target.value)} onBlur={()=>setEmailTouched(true)}></input>
            <span className='text-sm text-red-600'>{emailError}</span>

            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Contact number*</label>
            <input type='number' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md' value={phone}
            onChange={(e)=>setPhone(e.target.value)} onBlur={()=>setPhoneTouched(true)}></input>
            <span className='text-sm text-red-600'>{phoneError}</span>
              
             
            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Upload Resume* (PDF/Word)</label>
            
            <div className='w-[80%] sm:w-[50%] flex justify-start items-center '>
             <UploadFile resumeURL={resumeURL} setResumeURL={setResumeURL}/>    {/* upload file as props used here */}
             { resumeURL ? <span className='w-[80%] text-[0.85rem] text-[#595959] mt-4'>File selected</span> 
             : <span className='w-[100%] md:w-[80%] text-[0.5rem] md:text-[0.85rem] text-[#595959] mt-4'>No file Chosen</span>}
             </div>
            {/* <button className='px-1 border-2 border-[#A1A1A1] rounded w-[15%] md:text-xs sm:text-[0.5rem] text-[0.4rem] text-[#595959] mt-2'>Choose File</button> */}
            <button className='py-1.5  bg-[#4739FF] text-white mt-5 sm:w-[70%] w-[60%] rounded-md'
            onClick={addHiring}>Submit</button>
        </div>

     </div>
    </>
  )
}

export default Hiring