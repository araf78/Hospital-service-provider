import { getAuth } from "@firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import app from "../../firebase.init";
import Loading from "../Loading/Loading";

const auth = getAuth(app);

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

//   handle page load when reload page
  if(loading){
      return <Loading></Loading> 
  }

//   control path location 
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequiredAuth;
