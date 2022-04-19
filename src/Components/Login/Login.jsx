import { getAuth } from "@firebase/auth";
import { async } from "@firebase/util";
import { useState } from "react";
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import {   useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {

  const [
    signInWithEmailAndPassword
  ]  = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

const handleSignInWithEmailAndPassword = ()=>{
  signInWithEmailAndPassword(email, password)
  .then(()=>{
    navigate(from, { replace: true })
  })

}

  const handleSignInWithGoogle = ()=>{
    signInWithGoogle()
    .then(()=>{
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="m-20 mx-auto bg-cyan-800 rounded-2xl w-2/4">
      <h2 className="text-white py-2 mt-2 font-md text-3xl font-black">
        Login
      </h2>

        {/* login form */}
      <form className="form-container">
        <div className="input-group mt-8 mb-6">
          <label className="block text-white" htmlFor="Email">
            Email
          </label>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-4/6 p-2 text-2xl rounded-md 3/4"
            type="email"
            name="email"
            id=""
            placeholder="Your email"
          />
        </div>
        <div className="input-group mt-8 mb-6">
          <label className="block text-white" htmlFor="Password">
            Password
          </label>
        </div>
        <input
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
          className="border-2 w-4/6  p-2 text-2xl rounded-md"
          type="password"
          name="password"
          id=""
          placeholder="password"
        />
      </form>
       
        
        <div className="grid grid-rows-2 gap-2">
        <div>

         {/* sign in with  email and password */}

        <input onClick={handleSignInWithEmailAndPassword}
          className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 mt-8 w-2/5 rounded-md"
          type="submit"
          value="Login"
        />
        </div>

        {/* create new account and reset password */}

      
      <div>
       {/* sign in with  google */}
      <input
       onClick={handleSignInWithGoogle  }
        className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 w-2/5 rounded-md"
        type="submit"
        value="Continue with google"
      />
      </div>
        </div>
    </div>
  );
};

export default Login;
