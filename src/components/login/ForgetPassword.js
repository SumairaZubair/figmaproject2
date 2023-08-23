import { useState } from 'react';
// import {RxCross1} from 'rea'
import '../../components/login/fogetPasswod.css'
const ForegtPassword=()=>{
    const [email, setEmail] = useState('');
     const [instruction , setInstruction] = useState()
const [close, setClose] = useState(false)


     const handleChange = (e) => {
        setEmail(e.target.value);
      };

     

    const handleSubmit = (e) => {
        e.preventDefault();
        setInstruction('If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes');
        if(close){
setInstruction('')
        }else{
            setInstruction('If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes');
        } setClose(!close)

  };


   return(
    <div>
         <div className='signUpContentV'>
                <div className='signUpFormV'>
                    <img className='signLogoV' src={require('../../Assest/LOGO.png')} alt="Logo" />
                    <div className='formDivV'>
                        <div className='formV'>
                           <h1>Forget Password</h1>
                        <input
                                        className='emailV'
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button className='verifyBtn' onClick={handleSubmit}>Send Instruction</button>
                                    <p className='confirmMsg'>{instruction}</p>
                                    <p className='forgetPara'>Sign In</p>
                                    <p className='forgetPara'>Create Account</p>
                                    <p className='forgetPara'>Didn’t receive unlock instruction?</p>
                                    
                                    
                        </div>
                    </div>
                </div>
            </div>
    </div>
   )
}
export default ForegtPassword