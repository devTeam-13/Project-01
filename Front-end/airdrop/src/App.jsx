import React, { useState } from 'react';
import './App.css';
import Home from './components/home/home';

export default function App(){

    const [start,setStart] = useState(false)

     setTimeout(()=>{
       setStart(true);
     },4000)
         
  return (
     <>
       { !start ? <div><div className=" bg-slate-900 w-full h-screen flex justify-center ">
        <div className='w-full h-1/2  flex items-center justify-center'><img  src="/sticker.png" alt="logo" className='w-36 h-36  ' /></div>
       
        </div>
        <div className="w-full text-slate-50">PONKE </div>
        </div>:
           
        <div className="home  bg-slate-900 w-full h-screen p-2">
            <div className="container bg-slate-900 w-full h-full">
              <Home/>
                
              
              
              </div>
        </div>
       }

         {/* <div className='w-full h-screen flex justify-center align-middle'>

         </div> */}
    
     
     </>
  )
}