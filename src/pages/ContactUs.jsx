import React,{useState,useEffect} from 'react'
import contactImg from '/Images/contact.png'
import successManImg from '/Images/success-man.png'
import iconImg from '/Images/contact/icon.png'

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

    <div className='mt-10 flex bg-[#FEF2E9]'>

        <div className='w-[50%] flex flex-col mt-14'>
            <div className='flex justify-evenly'>
            {/* <img src={iconImg} className='absolute w-[1%] h-[2%] mr-[40%] mt-[1%]'></img> */}
          <input type='text' placeholder='Full Name' className=' w-[40%] h-[2rem] rounded-md'
          onChange={(e)=>setFullName(e.target.value)} onBlur={()=>setFullNameTouched(true)}></input>
          {/* <span className='text-sm text-red-600'>{fullNameError}</span> */}

          <input type='text' placeholder='Email address' className=' w-[40%] rounded-md'
          onChange={(e)=>setEmail(e.target.value)} onBlur={()=>setEmailTouched(true)}></input>
          {/* <span className='text-sm text-red-600'>{emailError}</span> */}
          </div>
          <input type='text' placeholder='Subject' className='mt-4 ml-10 w-[40%] h-[2rem] rounded-md'
          onChange={(e)=>setSubject(e.target.value)} onBlur={()=>setSubjectTouched(true)}></input>
          {/* <span className='text-sm text-red-600'>{subjectError}</span> */}

          <input type='text' placeholder='Message' className='mt-4 ml-10 w-[88%] h-[6rem] rounded-md'></input>
          <button className='lg:mt-10 sm:mt-8 mt-6 ml-10 bg-[#4739FF] py-2 w-[20%] md:text-[0.75rem] sm:text-[0.65rem] text-[0.5rem] text-white rounded-md'>Send Message</button>
        </div>

        <div className='w-[50%] flex justify-center'>
            <img src={successManImg} className='w-[50%]'></img>
        </div>
    </div>
    </>
  )
}

export default ContactUs