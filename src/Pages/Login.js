import React, {useState} from 'react'
import masalaimg from '../tvpAssets/LoginPage/masalaImages.png'
import LoginLogo from '../tvpAssets/LoginPage/loginLogo.png'
import loginsocial from '../tvpAssets/LoginPage/Continue.png'
import fb from '../tvpAssets/LoginPage/fb.png'
import google from '../tvpAssets/LoginPage/google.png'
import apple from '../tvpAssets/LoginPage/apple.png'
import { useDispatch} from 'react-redux'; 
import { loginUser } from '../redux/authSlice'

import { NavLink } from 'react-router-dom';
import '../tvpAssets/Login.css'

const Login =() =>  {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin =()=> {
    dispatch(loginUser({ email, password }))
 
    }
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="loginbox">

                            <NavLink to="/"> <img src={LoginLogo} /></NavLink> 
                                <h3 >Login to your Account</h3>

                                <div className="loginForm">
                                   
                                        <div className="mb-5">
                                            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control orngBorder" id="loginID" aria-describedby="emailHelp" placeholder='Email' />
                                        </div>
                                        <div className="mb-5">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control orngBorder" id="LoginPW" placeholder='Password' />
                                        </div>
                                        <div className="mb-3 form-check formcheck">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label px-2" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <button onClick={handleLogin} type="submit" className="btn login-btn ">Login</button>
                                        <h6 className='forgetlink'>Forget Password?</h6>
                             

                                    <div className="socialLogin">
                                        <img src={loginsocial} />
                                        <div className="row py-3">
                                            <div className="col-4"><img src={fb} /></div>
                                            <div className="col-4"><img src={google} /></div>
                                            <div className="col-4"><img src={apple} /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                           
                                                <h6 className='alsi'>Don’t have an account? <NavLink to="/Signup" style={{ textDecoration: 'none' }}><span>Sign Up</span></NavLink> </h6>
                                            </div>
                                        </div>
                                    </div>


                                </div>




                            </div>



                        </div>
                        <div className="col-md-6 imageseclogin"><img src={masalaimg} /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;

//how to makehtml registration form?

