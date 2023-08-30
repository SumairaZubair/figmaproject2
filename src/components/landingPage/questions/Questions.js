import './questions.css';
import React, { useState } from 'react';

const Questions =()=>{
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');
   
        const [formData, setFormData] = useState({ address: '' });
      

    return(

<div>
<div className="quesBg">
                <div className='quesMain'>
                  <h1 className='haveQues'>Have a question?</h1>
             <div className='askQuesDv'>
                  <div className='askQuesForm'>
                      
                      <div className='askField'>
                      <input
                                        className='fname'
                                        type="text"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <input
                                        className='lname'
                                        type="password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                      </div>
                    <div className='askSecondDiv'>
                    <input
                                        className='Email'
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    /> 
                                   <textarea
          name="address"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}    
          className="input-textarea"
          style={{ resize: 'none' }}
          placeholder='How can we help you?'
          rows="12" 
          cols="30" 
        ></textarea>
         <button className='submitbutton' type="submit">Submit</button>
                    </div>
            </div>
                  </div>

                </div>
            </div>
</div>
    )
    }
export default Questions