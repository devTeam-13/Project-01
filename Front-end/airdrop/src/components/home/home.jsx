import { useContext,useState } from "react"
import { TelegramContext } from "../../utils/store"
export default function Home(){
    const user = useContext(TelegramContext)
    const [coins,setCoins] = useState(500)
    const [walletConnected ,setWalletConnected] = useState(false)
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Invite 5 friends to Bubbles', description: '+30000 BUBBLES', claimed: false,coins:30000 },
        { id: 2, name: 'Share your story', description: '+1000 BUBBLES', claimed: false,coins:1000 },
        { id: 3, name: 'Bonus', description: '+500 BUBBLES', claimed: false,coins:500 },
        { id: 4, name: 'Join Bubbles Community group', description: '+2000 BUBBLES', claimed: false,coins:2000 },
        { id: 5, name: 'Make TON transaction', description: '+10000 BUBBLES', claimed: false,coins:10000 },
      ]);
      const claimTask = (id,coin) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, claimed: true };
          }
          return task;
        });
        setCoins(coins+coin)
        setTasks(updatedTasks);
      };
      const handleConnectWallet = () => {
        // Logic to connect wallet goes here
        setWalletConnected(true)
      };
      const sortedTasks = tasks.sort((a, b) => a.claimed - b.claimed);

 console.log("userr=>",user);

  

    return (
  <div className="home h-screen"> 
  <div className="body p-4">
      <div className="amount_token w-full h-8 flex justify-center items-center p-1 text-slate-50 text-xl font-serif">
      <button
      className={`bg-slate-200 text-xs  font-bold py-2 px-4 rounded-full transition duration-300   ${walletConnected? "text-slate-400 bg-slate-800  ":"text-slate-600"}`}
      onClick={handleConnectWallet}
    >
    { walletConnected?"0x222... Connected":   "Connect Wallet"}
    </button>

</div>
     
        <div className="amount_token w-full h-40 flex flex-col justify-center items-center p-2  text-slate-50 text-5xl  font-bold">
          <div>{coins.toLocaleString()}</div>
          <div className="text-sm font-extralight text-slate-300 pt-1">$BUBS</div>
       

        </div>
       
        <div className="TaskSection w-full  ">
             <div className="task_head  text-slate-200 ">
                Tasks ({tasks.length})
             </div>
             <div className="task-list">
      {sortedTasks.map((task) => (
        <div key={task.id} className="task-item  pl-1 pr-1 pt-3 pb-3 mt-2 flex justify-between items-center">
          <div>
            <h3 className=" text-md text-gray-300">{task.name}</h3>
            <p className="text-sm text-gray-400">{task.description}</p>
          </div>
          <div>
            <button
              className={`px-3 py-2 rounded-full ${
                task.claimed ? ' cursor-not-allowed text-sm' : 'bg-gray-800 '
              } text-slate-200`}
              onClick={() => claimTask(task.id,task.coins)}
              disabled={task.claimed}
            >
              {task.claimed ? 'Claimed' : 'Claim'}
            </button>
          </div>
        </div>
      ))}
    </div>
        </div>
        </div>
      
        <div className="footer w-full h-16 bg-slate-800  flex rounded-full  ">

            <div className="menu w-1/4 flex justify-center items-center   text-slate-400">H</div>
            <div className="menu w-1/4 flex justify-center items-center  text-slate-400">L</div>
            <div className="menu  w-1/4 flex justify-center items-center  text-slate-400">T</div>           
            <div className="menu  w-1/4 flex justify-center items-center  text-slate-400">I</div>

        </div>


  </div>
    )
}