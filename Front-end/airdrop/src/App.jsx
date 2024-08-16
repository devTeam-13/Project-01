import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './components/home/home';

export default function App(){
  const TelegramWebApp = window?.Telegram?.WebApp;
    const [start,setStart] = useState(false)
    const [userId, setUserId] = useState(null);
    useEffect(() => {
      console.log("Checking if Telegram WebApp is available...");
  
      if (window.Telegram) {
        console.log("Telegram object found:", window.Telegram);
      } else {
        console.error("Telegram object not found on window. Make sure you open this app through Telegram.");
      }
  
      if (window.Telegram?.WebApp) {
        console.log("Telegram WebApp is available:", window.Telegram.WebApp);
        const user = window.Telegram.WebApp.initDataUnsafe?.user;
        console.log("User data:", user);
  
        window.Telegram.WebApp.expand(); // Expand the web app to full screen
      } else {
        console.error("Telegram WebApp is not found. Make sure the app is opened via Telegram.");
      }
    }, []);
  
     setTimeout(()=>{
       setStart(true);
     },4000)
         
  return (
     <>
       { !start ? <div className='w-full h-screen bg-slate-900 flex justify-center items-center '><div className="  ">
        <div><img  src="/sticker.png" alt="logo" className='w-36 h-36  ' /></div>
       
 
        <div className="w-full h-44 text-slate-50"> {userId?userId:"no user id "} </div>       </div>
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