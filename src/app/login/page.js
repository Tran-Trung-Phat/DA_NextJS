'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { login } from "../store/authslice";
import { useCookies } from "react-cookie";
export default function LoginPage() {
  const route =useRouter();
  const dispatch = useDispatch();
  const info =useSelector(state => state.auth);
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['user']);

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(login({username,password}))
  }
  useEffect(()=>{
    if(info.id > 0 && info.accessToken){
      // lưu token vào cookie
      setCookie('user', { accessToken: info.accessToken }, {
        path: '/',
        maxAge: 30 * 60, // 30 minutes
      });
      //chuyển trang
      route.push('/');
    }
  },[info, route, setCookie])

  if(info.loading){
      return(
        <div className="login">
          <link rel="stylesheet" href="/css/style.css" />
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' alt="Loading..."/>
        </div>
      )
    }

  return (
   <div className="login">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cyberpunk Login</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <link rel="stylesheet" href="/css/style.css" />
  <div className="login-container">
    <h2>LOGIN</h2>
    <form id="loginForm" onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn">ACCESS</button>
      </div>
      <div id="error-message" className="error-message">
        {info.error && <p>{info.error}</p>}
      </div>
    </form>
  </div>
</div >
  );
}