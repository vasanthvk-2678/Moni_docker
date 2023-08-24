import React, { useState } from 'react';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate()
    const [userId, setUserId] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = () => { // function to handle login
        // let data = {
        //     id: userId,
        //     pass: pass,
        // }
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3002/login',
        //     data: data
        // }).then((res)=>{
            toast.success("Successfully logged in!")
        //     setTimeout(() => {
        //         navigate("/dashboard")
        //     }, 1000);
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     toast.error(err.message)
        // })
    }
    return(
        <div className="content">
            <ToastContainer 
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick={false}
                rtl={false}
            />
            <img src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678130-profile-alt-4-1024.png'></img>
            <div className='loginLabel'>
                Login
            </div>
            <div className="inputfield">
                <span className="fa fa-user"></span>
                <input 
                    type="text"
                    placeholder='User Id'
                    onChange={(e)=>setUserId(e.target.value)}
                    required />
            </div>
            <div className="inputfield">
                <span className="fa fa-lock"></span>
                <input 
                    type="password"
                    placeholder='Password'
                    onChange={(e)=>setPass(e.target.value)}
                    required />
            </div>
            <button className="loginBtn" onClick={()=>handleLogin()}>Log in</button>
            <div className="or">Or</div>
            <div className="icon-button"> 
                <span className="facebook"><i className="fa fa-facebook"></i>  Facebook</span>
                <span><i className="fa fa-google"></i>  Google</span>
            </div>
            <div className="signup-link">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}
export default Login;