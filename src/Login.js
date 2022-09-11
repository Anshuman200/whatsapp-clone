import React from "react";
import './login.css';
import { Button } from "@mui/material";
import whatsAppImg from './whatsappImg.png';
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
    const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user : result.user,
        });
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src={whatsAppImg} alt="" />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
