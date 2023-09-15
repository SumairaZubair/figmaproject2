

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { auth } from '../fFirebaseConfig';
import { message} from 'antd';

const Verified = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      console.log(currentUser)
      if (currentUser) {
        if (currentUser.emailVerified) {
          navigate('/proAcc')
          setEmailVerified(true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

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
    onSubmit: async (values) => {
      // Send verification email
      try {
        await sendEmailVerification(auth.currentUser);
        message.success('Verification email sent.');
        navigate('/proAcc');
      } catch (error) {
        console.error(error);
        message.error('Error sending verification email.');
      }
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (emailVerified=== true) {
  //     // console.log('navigate')
  //     navigate('/proAcc');
  //   } else {
  //     setConfirmationMessage('Email is not yet verified.');
  //   }
  // };

  // Move the emailVerified update to useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (currentUser.emailVerified) {
          setEmailVerified(true);
          // navigate('/proAcc')
        } else {
          setEmailVerified(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (

    <div>
    <div className="signUpContentV">
      <div className="signUpFormV">
        <img className="signLogoV" src={require('../../Assest/LOGO.png')} alt="Logo" />
        <div className="formDivV">
          <div className="formV">
            <h1>Verification Code</h1>
            <p>We emailed you a link; please click on the link to verify your email.</p>

            <div>
              {emailVerified ? (
                
                message.success('Your email has been successfully verified. You can now access your account.')
              ) : (
               
                message.error('Your email is not yet verified. Please check your email for a verification link.')
              )}
            </div>

            <button className="verifyBtn" type="submit">
              Verify Now
            </button>
            <p className="confirmMsg">{confirmationMessage}</p>
            <p className="ask">
              Question? <span>We are here to help</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Verified;


