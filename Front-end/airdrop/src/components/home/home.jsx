import { useContext } from "react"
import { TelegramContext } from "../../utils/store"
export default function Home(){
    
   

 const user = useContext(TelegramContext)
    return (
  <>    <div className="amount_token w-full h-10 flex justify-center items-center p-1 text-slate-50 text-4xl  font-bold">
   hi , {user?.first_name}

</div>
     
        <div className="amount_token w-full h-44 flex justify-center items-center p-2 text-slate-50 text-4xl  font-bold">
          37,789

        </div>
        <div className="box w-full h-40 bg-slate-800 rounded-md">
 .
        </div>

        <div className="box w-full h-40 bg-slate-800 rounded-md mt-2">
 .
        </div>
        <div className="box w-full h-40 bg-slate-800 rounded-md mt-2">
 .
        </div>
        <div className="box w-full h-40 bg-slate-800 rounded-md mt-2">
 .
        </div>



  </>
    )
}