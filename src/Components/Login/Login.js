import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";
export default function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    console.log("signin");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <h1>LOGIN</h1>
      <Button onClick={signIn}>Sign In With Google</Button>
    </div>
  );
}
