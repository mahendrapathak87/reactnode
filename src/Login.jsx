import axios from "axios";
import { useState } from "react";
import { Route, useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
const [email, setEmail] =useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();


const btnClick = async(e) =>{
    


    await axios.post('http://localhost:7777/login', {
     email,
        password
  })
  .then(function (response) {
    if(response.status ===200) {
        navigate('/dashboard');
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

    return <>
        <h1>Login page</h1>
       <input className="input validator" type="email" name="email" required placeholder="mail@site.com" 
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
<div className="validator-hint">Enter valid email address</div>
<p className="validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
<input type="password" className="input validator" required placeholder="Password" 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  />
<p className="validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
<button className="btn" onClick={(e) => btnClick(e)}>Default</button>
    </>
}

export default Login;