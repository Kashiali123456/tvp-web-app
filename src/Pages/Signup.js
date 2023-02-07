import React, {useState} from 'react'
import masalaimg from '../tvpAssets/LoginPage/masalaImages.png'
import LoginLogo from '../tvpAssets/LoginPage/loginLogo.png'
import loginsocial from '../tvpAssets/LoginPage/Continue.png'
import fb from '../tvpAssets/LoginPage/fb.png'
import google from '../tvpAssets/LoginPage/google.png'
import apple from '../tvpAssets/LoginPage/apple.png'
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux'; 
import { registerUser } from '../redux/SignUpSlice'
import '../tvpAssets/Login.css'

const  Signup =() => {

        const [first_name, setName] = useState("")
        const [last_name, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [mobile_number, setMobileNumber] = useState("")
        const [password, setPassword] = useState("")
        const [referral_code, setReferralCode] = useState("")
        const dispatch = useDispatch()
        const handlesignup =()=> {
        dispatch(registerUser({first_name, last_name,  email, mobile_number, password, referral_code }))
     
        }
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="loginbox">

                            <NavLink to="/"> <img src={LoginLogo} /></NavLink> 
                                <h3 >Create Your Account</h3>

                                <div className="loginForm">
                                 
                                        <div className="mb-4">
                                            <input type="text" className="form-control orngBorder" value={first_name} onChange={(e) => setName(e.target.value)} id="" aria-describedby="emailHelp" placeholder='First Name' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="text" className="form-control orngBorder" value={last_name} onChange={(e) => setLastName(e.target.value)} id="" aria-describedby="emailHelp" placeholder='Last Name' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="email" className="form-control orngBorder" value={email} onChange={(e) => setEmail(e.target.value)} id="" aria-describedby="emailHelp" placeholder='Email' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="tel" className="form-control orngBorder" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)} id="" aria-describedby="emailHelp" placeholder='Phone number' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="form-control orngBorder" value={password} onChange={(e) => setPassword(e.target.value)} id="LoginPW" placeholder='Password' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="form-control orngBorder" value={referral_code} onChange={(e) => setReferralCode(e.target.value)} id="LoginPW" placeholder='Referral Code' />
                                        </div>
                                        <button  onClick={handlesignup} className="btn login-btn ">Sign Up</button>

                                   
                                    <div className="socialLogin">
                                        <img src={loginsocial} />
                                        <div className="row py-3">
                                            <div className="col-4"><img src={fb} /></div>
                                            <div className="col-4"><img src={google} /></div>
                                            <div className="col-4"><img src={apple} /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col">

                                                <h6 className='alsi'>Already have an account?  <NavLink to="/Login" style={{ textDecoration: 'none' }}><span>Sign In</span></NavLink> </h6>
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


export default Signup;


