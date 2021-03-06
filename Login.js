import React, {useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const Firebase = useContext(FirebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault()
firebase.auth().signInWithEmailAndPassword(email,password).then (()=>{
  alert('Logged In')
}).catch((error)=>{
  alert(error.message)
  }).then(()=>{
    history.push("/login")
  })                    
                      
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
