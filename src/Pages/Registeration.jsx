import React from 'react'
import { useNavigate } from "react-router-dom"

const Registeration = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [des, setDes] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleRegister = async () => {
    const payload = {
      name: name,
      email: email,
      password: password,
      username: username,
      mobile: number,
      description: des
    }
    try {
      const res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      let data = await res.json();
      console.log(data)
      // setError(false)
      navigate("/Login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
    return (

      <div>{console.log("Pallav Sharma")}
        {error?alert("User already exists")
        :
        <form onSubmit={handleRegister}>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>UserName: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Moblie: </label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
          <br />
          <label>Description: </label>
          <textarea cols="5" rows="1" value={des} onChange={(e) => setDes(e.target.value)}></textarea>
          <br />
          <label>Password: </label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button>Register</button>
        </form>
      }
      </div>
    )
  }
}
export default Registeration