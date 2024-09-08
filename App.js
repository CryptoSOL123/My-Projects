import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between login and signup

  return (
    <div className="App">
      {isLogin ? (
        <>
          <h2>Login</h2>
          <Login />
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <Signup />
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
