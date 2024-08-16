import React, { useState } from 'react';
import './App.css';


export default function App(){

    const [start,setStart] = useState(false)

     setTimeout(()=>{
       setStart(true);
     },5000)
         
  return (
     <>
       { !start ? <div className=" bg-slate-900 w-full h-screen flex justify-center items-center ">
        <img  src="/sticker.png" alt="logo" className='w-28 h-28 '/>
        </div>:
        <div>
        
        </div>
       }

         {/* <div className='w-full h-screen flex justify-center align-middle'>

         </div> */}
    
     
     </>
  )
}