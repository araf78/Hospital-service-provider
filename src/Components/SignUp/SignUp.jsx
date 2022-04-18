import React from 'react';

const SignUp = () => {
    return (
        <div>
             <div className="m-20 mx-auto bg-cyan-800 rounded-2xl w-2/4">
      <h2 className="text-white py-2 mt-2 font-md text-3xl font-black">
        Login
      </h2>
      <form className="form-container">
        <div className="input-group mt-8 mb-6">
          <label className="block text-white" htmlFor="Email">
            Email
          </label>
          <input
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
          className="border-2 w-4/6  p-2 text-2xl rounded-md"
          type="password"
          name="password"
          id=""
          placeholder="password"
        />
      </form>
       
        
        <div className="grid grid-rows-2 gap-2">
        <div>
        <input 
          className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 mt-8 w-2/5 rounded-md"
          type="submit"
          value="Login"
        />
        </div>
      <div>
      <input
        className="bg-gray-50 text-cyan-800 font-bold mb-8 p-2 w-2/5 rounded-md"
        type="submit"
        value="Continue with google"
      />
      </div>
        </div>
    </div>
        </div>
    );
};

export default SignUp;