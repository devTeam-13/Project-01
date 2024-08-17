import { useContext } from "react"
import { TelegramContext } from "../../utils/store"
export default function Home(){
    
   

 const user = useContext(TelegramContext)
 console.log("userr=>",user);
    return (
  <div className="home h-screen"> 
  <div className="body p-2">
      <div className="amount_token w-full h-8 flex justify-center items-center p-1 text-slate-50 text-xl font-serif">
   hi , {user?.user?.first_name}

</div>
     
        <div className="amount_token w-full h-40 flex justify-center items-center p-2 text-slate-50 text-4xl  font-bold">
          37,789

        </div>
        </div>
      
        <div className="footer w-full h-16 bg-slate-800  flex rounded-full  ">

            <div className="menu w-1/4 flex justify-center items-center   text-slate-400">a</div>
            <div className="menu w-1/4 flex justify-center items-center  text-slate-400">b</div>
            <div className="menu  w-1/4 flex justify-center items-center  text-slate-400">c</div>           
            <div className="menu  w-1/4 flex justify-center items-center  text-slate-400">c</div>

        </div>


  </div>
    )
}