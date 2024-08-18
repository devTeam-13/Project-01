import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './components/home/home';
import { TelegramContext } from './utils/store';



export default function App(){
  const TelegramWebApp = window?.Telegram?.WebApp;
    const [start,setStart] = useState(false)
    const [user, setUser] = useState({});
   const createUser =(user)=>{
    fetch("http://localhost:6969/api/v1/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telegramUsername: user?.username,
        tgId: user?.id,
        referralLink: "http://example.com/referral",
        joiningDate: "2024-08-18",
        numberOfReferrals: 0,
        bubblePoints: 500
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data)
        return data;
      })
      .catch(error => {console.error("Error:", error)
        return error
    });
    
   }
   const checkUserExist=(id)=>{
    fetch(`http://localhost:6969/api/users/${id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {console.log("Success:", data)
      if(data.id){
        setUser(data)
        return true
      }else {
        console.log("No user exist");
        return false
        
      }
    
    })
      .catch(error => console.error("Error:", error));
    
   }
    useEffect(() => {
      if (TelegramWebApp?.initData) {
        const user = TelegramWebApp?.initDataUnsafe?.user;
         console.log("user=",user);
        if (user) {
          setUser(user); // Get the user ID

          if(checkUserExist(user.id)==false){
             createUser(user)
             console.log("user not exist")
          }
          else {
            console.log("old user",user);
          }
         
           
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