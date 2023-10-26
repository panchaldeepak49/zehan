import React,{useState,useEffect} from 'react'
import hiringImg from '/Images/hiring.png'
import UploadFile from '../Components/UploadFile';

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

  const nameRegex = /^[A-Za-z]{2,50}( [A-Za-z]{2,50}){0,1}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
  // console.log(phone);

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
      if(!phone.trim()){
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
            <input type='text' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md' 
            onChange={(e)=>setName(e.target.value)} onBlur={()=>setNameTouched(true)}></input>
            <span className='text-sm text-red-600'>{nameError}</span>

            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Your Email*</label>
            <input type='email' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md'
            onChange={(e)=>setEmail(e.target.value)} onBlur={()=>setEmailTouched(true)}></input>
            {/* <span className='text-sm text-red-600'>{emailError}</span> */}

            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Contact number*</label>
            <input type='number' className='sm:w-[80%] w-[70%] h-[2rem] rounded-md'
            onChange={(e)=>setPhone(e.target.value)} onBlur={()=>setPhoneTouched(true)}></input>
            {/* <span className='text-sm text-red-600'>{phoneError}</span> */}
              
             
            <label className='mt-5 sm:text-[1rem] text-[0.85rem]'>Upload Resume* (PDF/Word)</label>
            
             <UploadFile />    {/* upload file as props used here */}
            {/* <button className='px-1 border-2 border-[#A1A1A1] rounded w-[15%] md:text-xs sm:text-[0.5rem] text-[0.4rem] text-[#595959] mt-2'>Choose File</button> */}
            <button className='py-1.5  bg-[#4739FF] text-white mt-5 sm:w-[70%] w-[60%] rounded-md'>Submit</button>
        </div>

     </div>
    </>
  )
}

export default Hiring