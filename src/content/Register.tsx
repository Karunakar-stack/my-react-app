import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Register() {
    const navigate = useNavigate();
    const handleRegister = () => navigate('/login');
    return (

        <div className='RegisterPage'>
            <div className="registerPage">
                <div> <h1>Register Page </h1></div>
                <h2>Hi User! </h2>
                Email : <input type="text" />
                Password : <input type="password" />
                Re-Pasword :  <input type="password" />
                <button onClick={handleRegister}>Register</button>
                <h6>Already Have  An Account </h6>
                <h6><Link to="/login">SignIn</Link></h6>

            </div>
        </div>
    )
}

export default Register