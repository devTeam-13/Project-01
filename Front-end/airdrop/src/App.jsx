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
       { !start ? <div className='w-full h-screen bg-slate-900 flex justify-center items-center '><div className="  ">
        <div><img  src="/sticker.png" alt="logo" className='w-36 h-36  ' /></div>
       
 
        <div className="w-full h-44 text-slate-50"> </div>       </div>
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