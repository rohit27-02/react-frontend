import React,{useState} from 'react'
import "./register.css"

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
  
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const data = {username,password}
      try {
        fetch(`${process.env.REACT_APP_URL}api/login`,{
         method:"POST",
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
       }).then((res)=>res.json()).then((data)=>{
        localStorage.setItem("token",data.token);
      });
      } catch (error) {
        window.alert(error)
      }
      
    }
    return (
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Email</label>
            <input onChange={(e)=>setusername(e.currentTarget.value)} name='username' type='text' autoComplete='true' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input onChange={(e)=>setpassword(e.currentTarget.value)} name='password' type='password' />
          </div>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
}

export default Login