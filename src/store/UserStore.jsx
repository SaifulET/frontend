import { create } from "zustand";
import Cookies from "js-cookie";
import axios from 'axios';


const UserStore = create((set) => ({
  text: "Login",
  setText: (newText) => {
    set({ text: newText });
  },
  logout:async()=>{
    
    Cookies.remove("token");
   console.log(text)
    set({text:"Login"})
console.log(text)
  }
}));

export default UserStore;
