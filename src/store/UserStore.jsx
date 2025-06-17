import { create } from "zustand";
import Cookies from "js-cookie";
import axios from 'axios';


const UserStore = create((set) => ({
  text: "Login",
  setText: (newText) => {
    set({ text: newText });
  },
  logout:()=>{
    sessionStorage.clear()
    localStorage.clear()

    Cookies.remove("token");
   
    set({text:"Login"})

  }
}));

export default UserStore;
