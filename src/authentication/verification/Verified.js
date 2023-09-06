
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../verification/verify.css';

const Verified = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [closeMsg, setCloseMsg] = useState(false);

  const handleConfirmationCodeChange = (e) => {
    setConfirmationCode(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      code: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      code: Yup.string().required('Confirmation code is required'), 
    }),
    onSubmit: (values) => {
      if (closeMsg) {
        setConfirmationMessage('');
      } else {
        setConfirmationMessage(`Confirmation code for ${values.email} has been verified.`);
      }
      setCloseMsg(!closeMsg);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault(); 
    formik.handleSubmit(); 
  };

  return (
    <div>
      <div className='signUpContentV'>
        <div className='signUpFormV'>
          <img className='signLogoV' src={require('../../Assest/LOGO.png')} alt="Logo" />
          <div className='formDivV'>
            <div className='formV'>
              <h1>Verification Code</h1>
              <p>We emailed you a six-digit code to <span>{formik.values.email}</span>. Enter the code below to confirm your email address:</p>

              <input
                className='emailVv'
                type="text"
                placeholder="your one-time six-digit code"
                value={confirmationCode}
                onChange={handleConfirmationCodeChange}
                required
                name="code" 
                {...formik.getFieldProps('code')} 
              />
              {formik.touched.code && formik.errors.code ? (
                <div className="errorV">{formik.errors.code}</div>
              ) : null}

              <button className='verifyBtn' type="submit" onClick={handleSubmit}>Verify Now</button>
              <p className='confirmMsg'>{confirmationMessage}</p>
              <p className='ask'> Question? <span>We are here to help</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verified;
