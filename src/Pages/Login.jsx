import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = { username, password };
    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify(payload),
        }
      );
      let result = await res.json();
      setError(false)
      navigate("/dashboard");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      {error ? (
        <div>
          <h1>Please Enter Correct Details</h1>
          <button onClick={() => setError(false)}>TRY AGAIN</button>
        </div>
      ):(
        <div>
          <h1>Login</h1>
          <label>
            Username :{" "}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Password :{" "}
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      ) }
    </div>
  );
};

export default Login;