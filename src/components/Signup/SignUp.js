import '../Signup/signUp.css'
import { useState } from 'react';
const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, password });

    };

    return (
        <div>
            <div className='signUpContent'>
                <div className='signUpForm'>
                    <img src={require('../../Assest/signupLogo.png')} />
                    <div className='formDiv'>
                        <div className='form'>
                            <div className='sign/loginBtns'>
                                <button className='signIn'>Sign In</button>
                                <button className='signUps'>Sign Up</button>
                            </div>
                            <div className='feild'>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <input
                                    className='email'
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                     <input
                                    className='address'
                                        type="address"
                                        placeholder="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <input
                                    className='password'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='signbutton' type="submit">Sign Up Now</button>
                                </form>
                                <p className='terms'>By continuing, I agree to Cottage’s <span>Terms & Conditions.</span></p>
                            <div className='connect'>
                                <p className='line'></p>
                                <p>Or Connect With</p>
                                <p className='line'></p>
                            </div>
                            <div className='fb-tweet'>
                                <button className='facebook'>Facebook</button>
                                <button className='twiter'>Twitter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp