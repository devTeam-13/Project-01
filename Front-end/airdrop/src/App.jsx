import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './components/home/home';
import { TelegramContext } from './utils/store';
import { SERVER_URL,BOT_USERNAME } from "./utils/constants"
import { getCurrentDate } from './utils/currentDate';



export default function App(){
  const TelegramWebApp = window?.Telegram?.WebApp;
    const [start,setStart] = useState(false)
    const [user, setUser] = useState({});
    const [status,setStatus]=useState()

    const createRefLink = (id)=>{
      return  `https://t.me/${BOT_USERNAME}/start=${id}`;

    }
   const createUser =(user)=>{
    fetch(`${SERVER_URL}/api/v1/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({
        telegramUsername: user?.username,
        tgId: user?.id,
        referralLink: createRefLink(user.id),
        joiningDate: getCurrentDate(),
        numberOfReferrals: 0,
        bubblePoints: 500
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data)
        setUser(user)
      })
      .catch(error => {console.error("Error:", error)
       
    });
    
   }
   const checkUserExist=(id)=>{
    fetch(`${SERVER_URL}/api/v1/users/get/123456789`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        'ngrok-skip-browser-warning': 'true'
      },
    })
      .then(res => res.json())
      .then(data => {console.log("Success:", data)
  
        setUser(data)
        console.log("user got it");

    })
      .catch(error => {console.error("Error:", error)
      console.log("No user exist");
      createUser(user)
  });
    
   }
    useEffect(() => {
      if (TelegramWebApp?.initData) {
        const user = TelegramWebApp?.initDataUnsafe?.user;

        if (user) {
         // Get the user ID
         checkUserExist(user.id)
           
        }
      }
  
      TelegramWebApp.expand();
    }, []);

     setTimeout(()=>{
       setStart(true);
     },4000)
         
  return (
     <>
       { !start ? <div className='w-full h-screen bg-slate-900 flex justify-center items-center '><div className="  ">
        <div><img  src="/sticker.png" alt="logo" className='w-44 h-44  ' /></div>
       
 
        <div className="w-full h-44 text-slate-50 "> </div>   
    </div>
        </div>:
           
        <div className="home  bg-slate-900 w-full h-screen ">
            <div className="container bg-slate-900 w-full h-full">
              <TelegramContext.Provider value={{user:user}}>
              <Home/>




              </TelegramContext.Provider>
           
                
              
              
              </div>
        </div>
       }

         {/* <div className='w-full h-screen flex justify-center align-middle'>

         </div> */}
    
     
     </>
  )
}