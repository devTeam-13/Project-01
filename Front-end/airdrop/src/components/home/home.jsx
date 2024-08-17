import { useContext,useState } from "react"
import { TelegramContext } from "../../utils/store"
export default function Home(){
    
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Invite 5 friends to Bubbles', description: '+30000 BUBBLES', claimed: false },
        { id: 2, name: 'Share your story', description: '+1000 BUBBLES', claimed: false },
        { id: 3, name: 'Bonus', description: '+500 BUBBLES', claimed: false },
        { id: 4, name: 'Join Bubbles Community group', description: '+2000 BUBBLES', claimed: false },
        { id: 5, name: 'Make TON transaction', description: '+10000 BUBBLES', claimed: false },
      ]);
      const claimTask = (id) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, claimed: true };
          }
          return task;
        });
        setTasks(updatedTasks);
      };
 const user = useContext(TelegramContext)
 console.log("userr=>",user);
    return (
  <div className="home h-screen"> 
  <div className="body p-4">
      <div className="amount_token w-full h-8 flex justify-center items-center p-1 text-slate-50 text-xl font-serif">
   hi , {user?.user?.first_name}

</div>
     
        <div className="amount_token w-full h-40 flex justify-center items-center p-2  text-slate-50 text-4xl  font-bold">
          37,789

        </div>
        <div className="TaskSection w-full  ">
             <div className="task_head  text-slate-200 ">
                Tasks (5)
             </div>
             <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item  p-3 mt-2 flex justify-between items-center">
          <div>
            <h3 className=" text-sm text-gray-300">{task.name}</h3>
            <p className="text-sm text-gray-400">{task.description}</p>
          </div>
          <div>
            <button
              className={`px-3 py-2 rounded-full ${
                task.claimed ? ' cursor-not-allowed' : 'bg-gray-800 hover:bg-blue-700'
              } text-white`}
              onClick={() => claimTask(task.id)}
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