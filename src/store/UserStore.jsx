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
    await axios.get("/delete",{
  withCredentials: true,
});
    set({text:"Login"})

  }
}));

export default UserStore;
