import React, { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleGoToSignup = () => {
    setShowLogin(false);
  };

  const handleGoToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {showLogin ? (
        <Login onGoToSignup={handleGoToSignup} />
      ) : (
        <SignUp onGoToLogin={handleGoToLogin} />
      )}
    </div>
  );
}
