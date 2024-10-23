import React, { useState } from "react";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import '../login-signup-page/login-signup.css';

const LoginSignPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page-container">
      <div className="overlay"></div>
      <div className="auth-content">
        {isLogin ? (
          <Login handleSwitch={handleSwitch} />
        ) : (
          <Signup handleSwitch={handleSwitch} />
        )}
      </div>
    </div>
  );
};

export default LoginSignPage;
