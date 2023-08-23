import { useState } from 'react'
import '../Signup/verify.css'
const Verified = () => {
    const [email, setEmail] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [closeMsg, setCloseMsg] = useState(false)
    const handleConfirmationCodeChange = (e) => {
        setConfirmationCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (closeMsg) {
            setConfirmationMessage('')
        } else {
            setConfirmationMessage(`Confirmation code for ${email} has been verified.`);
        }
        setCloseMsg(!closeMsg)
    };
   

    return (
        <div>
            <div className='signUpContentV'>
                <div className='signUpFormV'>
                    <img className='signLogoV' src={require('../../Assest/LOGO.png')} alt="Logo" />
                    <div className='formDivV'>
                        <div className='formV'>
                            <h1>Verification Code</h1>
                            <p>We emailed you a six-digit code to <span>{email}</span>. Enter the code below to confirm your email address:</p>

                            <input
                                className='emailV'
                                id="confirmationCode"
                                type="email"
                                placeholder="your one time six digit code"
                                value={confirmationCode}
                                onChange={handleConfirmationCodeChange}
                                required
                            />
                            <button className='verifyBtn' onClick={handleSubmit}>Verify Now</button>
                            <p className='confirmMsg'>{confirmationMessage}</p>
                            <p className='ask'> Question? <span>We are here to help</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verified