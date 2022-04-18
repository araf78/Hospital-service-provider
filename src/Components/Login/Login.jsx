import React from 'react';
import useFirebase from '../../Hooks/useFirebase'
const Login = () => {

    const {signInWithGoogle} = useFirebase()

    return (
        <div className="m-20 mx-auto bg-cyan-800 rounded-2xl w-2/4">
            <h2 className="text-white py-2 mt-2 font-md text-3xl font-black">Login</h2>
            <form className='form-container'>
                <div className="input-group mt-8 mb-6">
                    <label className='block text-white' htmlFor="Email">Email</label>
                    <input className="border-2 p-2 text-2xl rounded-md 3/4" type="email" name="email" id="" placeholder='Your email'/>
                </div>
                <div className="input-group mt-8 mb-6">
                    <label className='block text-white' htmlFor="Password">Password</label>
                    <input className="border-2 p-2 text-2xl rounded-md" type="password" name="password" id="" placeholder='password'/>
                </div>
                    
                 <p>   <input className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 mt-8 w-2/5 rounded-md" type="submit" value="Login" /></p>
            </form>
                    <input onClick={signInWithGoogle} className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 mt-8 w-2/5 rounded-md" type="submit" value="Continue with google" />
        </div>
    );
};

export default Login;