import React,{useState,useEffect} from 'react'
import contactImg from '/Images/contact.png'
import successManImg from '/Images/success-man.png'
import iconImg from '/Images/contact/icon.png'
import { userRequest } from '../Components/RequestMethod'
import { message } from 'antd'
import DescriptionBox from '../Components/DescriptionBox'

const ContactUs = () => {

  const [fullName,setFullName] = useState('');
  const [fullNameTouched,setFullNameTouched] = useState(false);
  const [fullNameError,setFullNameError] = useState('');

  const [email,setEmail] = useState('');
  const [emailTouched,setEmailTouched] = useState(false);
  const [emailError,setEmailError] = useState('');

  const [subject,setSubject] = useState('');
  const [subjectTouched,setSubjectTouched] = useState(false);
  const [subjectError,setSubjectError] = useState('');

  // const [message1,setMessage1] = useState('');
  // const [messageTouched,setMessageTouched] = useState(false);
  // const [messageError,setMessageError] = useState('');
  const [description, setDescription] = useState('');
  const [characterLimitExceeded, setCharacterLimitExceeded] = useState(false);
////////////////////////////////////////////////////////////////////////////////
const data = {
  name: fullName,
  email: email,
  subject: subject,
  message: description,
};

const sendMessage = async (e) => {
  setFullNameTouched(true);
  setEmailTouched(true);
  setSubjectTouched(true);

  if (!fullName) {
    message.error("Please enter your full name ");
    return; // Stop execution
  }
  else if(!email) {
    message.error("Please enter your email ");
    return; // Stop execution
  }
  else if(!subject) {
    message.error("Please enter your subject ");
    return; // Stop execution
  }
  else if(!description) {
    message.error("Please enter a message ");
    return; // Stop execution
  }
  else if(characterLimitExceeded) {
    message.error("Message character limit exceeded ");
    return; // Stop execution
  }
 else{

  await userRequest.post("/api/contactUs/create", data)
    .then(() => {
      message.success("Thank you for messaging to us.");
      setFullName('');
      setFullNameTouched(false);
      setEmail('');
      setEmailTouched(false);
      setSubject('');
      setSubjectTouched(false);
      setDescription('');
      //setMessageTouched(false);
    })
    .catch((err) => {
    const errorMessage = err.response?.data?.message || "An error occurred";
    message.error(errorMessage);
    });
    }}

  const nameRegex = /^[A-Za-z]{2,50}( [A-Za-z]{2,50}){0,1}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(()=>{
    if(fullNameTouched){
      if(!fullName.trim()){
        setFullNameError('Please enter your name');
      }
      else if(!nameRegex.test(fullName)){
        setFullNameError('Enter correct name with (2-50char.)')
      }
      else{
        setFullNameError('');
      }
    }

    if(emailTouched){
      if(!email.trim()){
        setEmailError('Please enter your email id ');
      }
      else if(!emailRegex.test(email)){
        setEmailError('Enter a valid email address')
      }
      else{
        setEmailError('');
      }
    }

    if(subjectTouched){
      if(!subject.trim()){
        setSubjectError('Please enter your subject');
      }
      else if(!nameRegex.test(subject)){
        setSubjectError('Enter a valid subject')
      }
      else{
        setSubjectError('');
      }
    }
    },[fullName,fullNameTouched,email,emailTouched,subject,subjectTouched]);

  return (
    <>
    <img src={contactImg}></img>

    <div className='absolute -mt-[22%] ml-[43%]'>
    <p className='md:text-[2.2rem] sm:text-[2rem] text-[1.75rem] text-white font-bold'>CONTACT US</p>
    <button className='ml-[15%] px-2 py-1 sm:text-[1rem] text-[0.75rem] text-white bg-[#4739FF] rounded-md'>Home-Contact Us</button>
    </div>

    <div className='mt-10 flex bg-[#FEF2E9] '>

        <div className='w-[50%] flex flex-col mt-14 '>
            <div className='flex ml-[6rem] gap-[10rem]'>
            {/* <img src={iconImg} className='absolute w-[1%] h-[2%] mr-[40%] mt-[1%]'></img> */}
            <div className='flex flex-col'>
          <input type='text' placeholder='Full Name' className=' w-[150%] h-[2rem] rounded-md' value={fullName}
          onChange={(e)=>setFullName(e.target.value)} onBlur={()=>setFullNameTouched(true)}></input>
          <span className='text-sm text-red-600'>{fullNameError}</span>
          </div>
          
          <div className='flex flex-col'>
          <input type='text' placeholder='Email address' className=' w-[148%] h-[2rem] rounded-md' value={email}
          onChange={(e)=>setEmail(e.target.value)} onBlur={()=>setEmailTouched(true)}></input>
          <span className='text-sm text-red-600'>{emailError}</span>
          </div>
          </div>
          <input type='text' placeholder='Subject' className='mt-4 ml-24 w-[40%] h-[2rem] rounded-md' value={subject}
          onChange={(e)=>setSubject(e.target.value)} onBlur={()=>setSubjectTouched(true)}></input>
          <span className='text-sm ml-24 text-red-600'>{subjectError}</span>

          {/* <input type='text' placeholder='Message' className='mt-4 ml-10 w-[88%] h-[6rem] rounded-md'
          onChange={(e)=>setMessage1(e.target.value)}></input> */}
          
          <DescriptionBox description={description} setDescription={setDescription}
          characterLimitExceeded={characterLimitExceeded} setCharacterLimitExceeded={setCharacterLimitExceeded}/> 
          {/* Description as component used here  */}


          <button className='lg:mt-10 sm:mt-8 mt-6 ml-24 bg-[#4739FF] py-2 w-[20%] md:text-[0.75rem] sm:text-[0.65rem] text-[0.5rem] text-white rounded-md'
          onClick={sendMessage}>Send Message</button>
        </div>

        <div className='w-[50%] flex justify-center'>
            <img src={successManImg} className='w-[50%]'></img>
        </div>
    </div>
    </>
  )
}

export default ContactUs