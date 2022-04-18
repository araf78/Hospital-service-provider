import { useState, signOut } from "react"
import app from "../firebase.init";
import {getAuth} from 'firebase/auth'

const auth = getAuth(app);

const useFirebase = () =>{
    const [user, setUser] =useState({});

   const googleSignOut = ()=>{
       signOut(auth)
       .then(()=>{})

    }
    return {
        user,
        googleSignOut
    }
}
export default useFirebase;