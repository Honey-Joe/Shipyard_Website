import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Login = () => {

   const navigate = useNavigate()
   const {backendUrl, token, setToken} = useContext(AppContext)

  const [state, setState] = useState('Sign Up');

  const [email,setEmail] = useState('')
  
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (e)=>{
   e.preventDefault();

  //  console.log(backendUrl)

   try {

      if(state === 'Sign Up'){
         
         const {data} = await axios.post( backendUrl + '/api/auth/register',{name,password,email})
         console.log(data);
         if (data.success) {
            localStorage.setItem('token',data.token)
            setToken(data.token)
            
         }
         else{
            toast.error("Already Register")
         }
      }
      else{

         const {data} = await axios.post(backendUrl + '/api/auth/login',{password,email})
         if (data.success) {
            localStorage.setItem('token',data.token)
            setToken(data.token)
            toast.success("Login Successful")
         }
         else{
            toast.error(data.message)
         }

      }

   } catch (error) {
      toast.error(error.message)
   }

  }

  useEffect(()=>{
   if (token) {
      navigate('/')
   }
  },[token])
  
  return (
    <form onSubmit={onSubmitHandler} className=' min-h-[80vh] flex items-center'>
      <div className=' flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
         <p className=' text-2xl font-semibold'>{state === 'Sign Up' ? "Creat Account" : "Login"}</p>
         <p >Please {state === 'Sign Up' ? "sign up" : "log in"} up to book appointment</p>
         {
            state === "Sign Up" &&  
            <div className=' w-full'>
               <p>Full Name</p>
               <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="text" onChange={(e)=> setName(e.target.value)} value={name} required/>
            </div> 
         }
         <div className=' w-full'>
            <p>Email</p>
            <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
         </div>
         <div className=' w-full'>
            <p>Password</p>
            <input className=' border border-zinc-300 rounded-lg w-full p-2 mt-1' type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
         </div>
         <button type='submit' className=' bg-[#ff6600] w-full text-white py-2 rounded-md text-base'>{state === 'Sign Up' ? "Creat Account" : "Login"}</button>
         {
            state === "Sign Up" ?
            <p >Already have an account? <span onClick={()=>setState("Login")} className=' text-primary underline cursor-pointer'>Login here</span> </p> 
            :
            <p >Create an new account ? <span onClick={()=>setState("Sign Up")} className=' text-primary underline cursor-pointer'>click here</span></p>
         }
      </div>
    </form>
  )
}

export default Login