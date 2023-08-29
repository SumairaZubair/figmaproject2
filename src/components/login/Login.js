// import '../../components/login/login.css'
// import { useState } from 'react';
// const Login =()=>{
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', { email, password });

//     };
//     return(
//         <div>
//              <div className="loginPage">
//                 <div className="loginForm">
//                      <img src={require('../../Assest/signupLogo.png')} alt='login bg'/>

//                     <div className='loginDiv'>
//                         <div>
//                             <img className='cooking' src={require('../../Assest/cooking.png')}/>
//                         </div>
//                        <div className='div'>
//                         <div className='bg'>
//                         <div className='login-form'>
//                         <div className='sign-loginBtn'>
//                                 <button className='signInBtn'>Sign In</button>
//                                 <button className='signUpsBtn'>Sign Up</button>
//                             </div>
//                             <form>

//                         <input
//                                     className='email'
//                                         type="email"
//                                         placeholder="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <input
//                                     className='password'
//                                         type="password"
//                                         placeholder="Password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                     <button className='signbutton' type="submit">Sign Up Now</button>
//                                 </form>
//                                 <p className='forgot'>Forgot Password?</p>
//                             <div className='connected'>
//                                 <p className='line'></p>
//                                 <p>Or Connect With</p>
//                                 <p className='line'></p>
//                             </div>
//                             <div className='fb-tweet'>
//                                 <button className='facebookk'>Facebook</button>
//                                 <button className='twiterr'>Twitter</button>
//                             </div>
//                         </div>
//                         </div>
//                        </div>
//                     </div>
//                 </div>
//              </div>
//         </div>
//     )
// }
// export default Login


import { useNavigate } from 'react-router-dom';
import '../login/login.css'
import { useState } from 'react';
// import Login from '../login/Login';
const Login = () => {
const navigate = useNavigate()
   
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {  password });
         
    };

    const handleSignUp=()=>{
        navigate('/signUp')
    }

    return (
        <div>
            <div className='signUpContentt'>
                <div className='signUpFormm'>
                    <img className='signLogoo' src={require('../../Assest/LOGO.png')} />
                    <div className='form-Div'>
                        <div className='formm'>
                            <div className='sign/loginBtns'>
                                <button className='signInn'>Sign In</button>
                                <button className='signUpss' onClick={handleSignUp}>Sign Up</button>
                            </div>
                            <div className='feildd'>
                                <form onSubmit={handleSubmit}>
                                 
                                     <input
                                    className='addresss'
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                    className='passwordd'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='sign-button' type="submit" onClick={()=>{navigate('/proAcc')}}>Sign Up Now</button>
                                </form>
                                <p className='forgot' onClick={()=>{navigate('/forget')}}>Forgot Password</p>
                            <div className='connected'>
                                <p className='linee'></p>
                                <p>Or Connect With</p>
                                <p className='linee'></p>
                            </div>
                            <div className='fb-tweeter'>
                                <button className='facebookk'>Facebook</button>
                                <button className='twittter'>Twitter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <Login/> */}
        </div>
    )
}
export default Login