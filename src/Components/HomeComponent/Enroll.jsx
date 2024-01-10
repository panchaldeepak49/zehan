import React,{useEffect, useState} from 'react'
import enrollImg from '/Images/enroll.png'
import rectangleEnrollHeadImg from '/Images/Rectangle 25.png'
import model8 from '/Images/model8.webp'
import { userRequest } from '../RequestMethod'
import { message } from 'antd'



const Enroll = () => {

  const [name,setName] = useState('');
  const [nameTouched,setNameTouched] = useState(false);
  const [nameError,setNameError] = useState('');

  const [email,setEmail] = useState('');
  const [emailTouched,setEmailTouched] = useState(false);
  const [emailError,setEmailError] = useState('');

  const [phone,setPhone] = useState('');
  const [phoneTouched,setPhoneTouched] = useState(false);
  const [phoneError,setPhoneError] = useState('');

  const [contact,setContact] = useState('');
  const [contactTouched,setContactTouched] = useState(false);
  const [contactError,setContactError] = useState('');
  //console.log(contact);

  // let data = JSON.stringify({
  //   "name": name,
  //   "email": email,
  //   "mobile_number": phone,
  //   "contact_type": contact,
  // });

  const data = {
    name: name,
    email: email,
    mobile_number: phone,
    contact_type: contact,
  };

  const addUser = async (e) => {
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
    await userRequest.post("/api/enroll/create", data)
    .then(() => {
      message.success("Thank you for enrolling with us.");
      setName('');
      setNameTouched(false);
      setEmail('');
      setEmailTouched(false);
      setPhone('');
      setPhoneTouched(false);
      setContact('');
      setContactTouched(false);
    })
    .catch((err) => {
      const errorMessage = err.response?.data?.message || "An error occurred";
      message.error(errorMessage);
    });
  }}
  /////////////////////////////////////////////////////////////////form field validation part 
  const nameRegex = /^[A-Za-z]{2,50}( [A-Za-z]{2,50}){0,1}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
  

  useEffect(()=>{
    if(nameTouched){
      if(!name.trim()){
        setNameError('Please enter your name ');
      }
      else if(!nameRegex.test(name)){
        setNameError('Enter correct name with(2-50char) ');
      }
      else {
        setNameError('');
      } 
    }

    if(emailTouched){
      if(!email.trim()){
        setEmailError('Please enter your email ');
      }
      else if(!emailRegex.test(email)){
        setEmailError('Enter correct email address ');
      }
      else {
        setEmailError('');
      } 
    }

    if(phoneTouched){
      if(!phone.trim()){
        setPhoneError('Please enter your contact number');
      }
      else if(!phoneRegex.test(phone)){
        setPhoneError('Enter 10digit valid mobile number');
      }
      else {
        setPhoneError('');
      } 
    }

  },[name,nameTouched,email,emailTouched,phone,phoneTouched])

  return (
    <>
    <div className='mt-14 w-[90%] flex justify-evenly'>
        <img src={model8} className='w-[40%]'></img>

        {/* <div className='w-[50%] flex flex-col justify-end mt-20 '>
            <img src={rectangleEnrollImg} className='w-[50%] h-[22rem]'></img>
            <img src={rectangleEnrollHeadImg} className='absolute w-[22%] mt-0.5'></img>
            </div> */}

            <div className='mt-28 lg:w-[25%] md:[w-27] sm:w-[30%] w-[35%] md:h-[20rem] border-4 border-[#4739FF] rounded-md flex flex-col
            items-center'>
                
            <img src={rectangleEnrollHeadImg} className=' w-[100%] '></img>
                <p className='absolute md:mt-4 sm:mt-1 sm:text-[1rem] text-[0.75rem] text-white'>Need Help</p>
                <input type='text' className=' w-[80%] h-[2rem] mt-4 rounded-md shadow-md' placeholder='Your Name'
                value={name} onChange={(e)=>setName(e.target.value)} onBlur={()=>setNameTouched(true)}></input>
                <span className='text-red-500 text-[0.75rem] mr-16' >{nameError}</span>

                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Your Email'
                value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={()=>setEmailTouched(true)}></input>
                <span className='text-red-500 text-[0.75rem] mr-24' >{emailError}</span>

                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Mobile Number'
                value={phone} onChange={(e)=>setPhone(e.target.value)} onBlur={()=>setPhoneTouched(true)}></input>
                <span className='text-red-500 text-[0.75rem] mr-12' >{phoneError}</span>

                <input type='text' className=' w-[80%] h-[2rem] mt-2 rounded-md shadow-md' placeholder='Contact Type'
                value={contact} onChange={(e)=>setContact(e.target.value)} ></input>
                <button className='lg:px-10 md:px-7 sm:px-3 px-2 md:mt-6 sm:mt-4 mt-2 mb-2 md:py-1 sm:py-0.2 py-0.2 rounded-md bg-[#4739FF] sm:text-[1rem] text-[0.75rem] text-white'
                onClick={addUser}>Submit</button>
            </div>
        

    </div>
    {/* <div className='bg-footer bg-no-repeat bg-cover w-full h-96 flex'></div> */}
    

    
    </>
  )
}

export default Enroll