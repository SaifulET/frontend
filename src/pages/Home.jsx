import { useEffect} from 'react';
import KanbanBoard from '../components/KanbanBoard';
import Navbar from '../components/Navbar';
import UserStore from '../store/UserStore';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Home = () => {
  const {setText}=UserStore()
   const navigate = useNavigate();
  useEffect(()=>{
    (async()=>{
axios.get("/user",{
  withCredentials: true,
})
     .then((res)=>{
      console.log("ldksld") 
      if(res.status===200){
        setText(res.data.user.name);    
        console.log("ldksld")   
      }
      
    })
    .catch((e)=>{
      console.log(e,"aaa")
      setText("Login");
      navigate('/');
    })
    })()
  },[])
    return (
    <div>
      
      <div className="px-6 w-full min-h-screen  bg-gradient-to-b from-zinc-900 to-zinc-800 flex flex-col items-center justify-center">
       <div className='h-30 mt-20 '><Navbar/></div> 
      <div className='mt-40'><KanbanBoard/></div>
    </div>
    </div>
    );
};

export default Home;