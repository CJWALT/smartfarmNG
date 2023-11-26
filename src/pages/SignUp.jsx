import React, {useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import {FcGoogle} from 'react-icons/fc'

import axios from 'axios'


const SignUp = () =>{

      const [regDetails, setRegDetails] = useState({ 
        email:'',
        firstname: '',
        username:'', 
        lastname: '',
        password: '', 
        country: '',
        cPwrd: '', 
        checkbox:false

      })

      const navigate = useNavigate();

      const handleValueChange = (e) =>{ 
       e.preventDefault(); 
       const { name, value, type, checked } = e.target;
       const inputValue = type === 'checkbox' ? checked : value;
       setRegDetails((prevRegDetails)=>(
          {
            ...prevRegDetails, 
            [name]: inputValue
          }
       ))
       console.log(regDetails)  
    }     
      

      const handleRegister = async (e) =>{ 
        e.preventDefault();
         if(regDetails.password === regDetails.cPwrd && regDetails.checkbox === true){
             try{ 
                const res = await axios.post(
                    "https://precision-farming.onrender.com/signup",
                    regDetails,{
                        headers: {
                            'Content-Type': 'application/json', 
                            // Authorization: `Bea`
                        }}
                )
                console.log(res)
                 alert("Registered Successfully")
                navigate('/')
             } catch (err){ 
                alert(err)
             }
      } else{
        alert("password do not match")
      }}


    return (
        <>
            <div className='bg-[#E6E6E6] '> 
                <div className="container">
                    <div className=' py-[4.9rem]'>
                        <img src="./assets/img/logo.png" alt='logo' className='w-[17rem]'/>
                    </div>
                    <div className='bg-white rounded-[.7rem] shadow-lg py-[.8rem] px-[.6rem]'>
                        <h4 className='font-semibold font-[Lato] text-[1.5rem] text-[#020202] mb-[.5rem]'>SIGN UP</h4>
                        <form action="#">
                            <input type="text" name='firstname' onChange={handleValueChange} value={regDetails.firstname} placeholder='First name*' className='w-full border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem] mb-[1rem]' required />
                            <input type="text" name='lastname' onChange={handleValueChange} value={regDetails.lastname} placeholder='Last name*' className='w-full border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem] mb-[1rem]' required/>
                            <input type="text" name='username' onChange={handleValueChange} value={regDetails.username} placeholder='User name*' className='w-full border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem] mb-[1rem]' required />
                            <input type="email" name='email' onChange={handleValueChange} value={regDetails.email} placeholder='Email*' className='w-full border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem] mb-[1rem]' required />
                            <select name='country' onChange={handleValueChange} value={regDetails.country} className='w-full border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem] mb-[1rem]'>Country: 
                                <option value="nigeria">Nigeria</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Ghana">Ghana</option>
                            </select>
                            <input type="password" onChange={handleValueChange} name='password' value={regDetails.password} placeholder='Password' required className='w-full border-2  mb-[1rem] border-[#5A5A5A] rounded-[.6rem] h-[3rem]'/>
                            <input type="password" value={regDetails.cPwrd} name='cPwrd' onChange={handleValueChange} placeholder='Confirm password' required className='w-full mb-[1rem]  border-2 border-[#5A5A5A] rounded-[.6rem] h-[3rem]'/>
                            <input type="checkbox" name='checkbox' onChange={handleValueChange} value={regDetails.checkbox} required id="privacy"/> <label htmlFor="privacy" className='font-[Lato] font-medium text-[.8rem]'>*i declare that i have read, understood and accepted then <a href="#" className='text-[#097969] underline'>Conditions of Use of the Service</a>, the terms provided in the <a href="#" className='text-[#097969] underline'> Privacy Policy </a> of the service and to know and accept the <a href='#' className='text-[#097969] underline'>Cookies Policy </a> of the same.</label>
                            <small className='block py-[1rem]'>*Mandatory Fields</small>
                            <div className=' flex justify-end'>
                            <Button
                              logInClick={handleRegister} 
                              children="Confirm"
                              fntColor="text-white"
                              btnWidth="py-[.8rem] px-[4.2rem]"
                              bgBtn="bg-[#065146]"/>
                            </div>
                            
                        </form>
                    </div>
                    <div className='py-[2rem]'>
                    <p className='mb-[1rem] text-center'>Already have an account? <Link to ='/' >Sign In </Link></p>
                    <Button 
                    
                    btnHover='hover:bg-[#065146] hover:text-white'
                     children='Login with Google'
                     icon={<FcGoogle size={30}/>}
                     bgBtn="outlined"
                    />
                    </div>
                    
                </div>
                </div>
        </>
    )
}

export default SignUp;