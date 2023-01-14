import React, { useState } from "react";
import AuthenticationLogin from "../components/Authentication/authenticationLogin";
import AuthenticationRegister from "../components/Authentication/authenticationRegister";

const AuthenticationContainer = ({ history }) => {
  const [registerVisible, setRegisterVisible] = useState(false);
  return (
    <div className="authentication">
      {!registerVisible && (
        <AuthenticationLogin
          choseRegister={() => {
            setRegisterVisible(true);
          }}
          loginComplete={() => {
            history.push("/home");
          }}
        />
      )}
      {registerVisible && (
        <AuthenticationRegister
          choseRegister={() => {
            setRegisterVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default AuthenticationContainer;
