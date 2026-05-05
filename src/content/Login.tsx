import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <><div className="loginPage">
            <div className='loginContainer'>
                <div> <h1>Login Page </h1></div>
                <h2>Hi welcome User! </h2>
                <div className='email' >
                    <label>Email : </label>
                    <input type="text" name="username" placeholder='Username' />
                </div >
                <br />
                <div className='email'>
                    <label >Password : </label>
                    <input type="password" name="password" placeholder='Password' /><br />
                </div><br />
                <label className='check'>
                    <input type="checkbox" />
                    <h6>Remember Me</h6></label>
                <label >
                    <button type="submit" className="bname">Login</button>
                </label>
                <div className="account">
                    <h6><a href="">Forget Password ?</a></h6>
                    <h6>Don't Have Account </h6>
                    <h6><Link to="/register">Create New Account</Link></h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login