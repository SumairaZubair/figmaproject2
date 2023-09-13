
import React,{useState} from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../fFirebaseConfig';
import '../verification/verify.css';
import { message } from 'antd';

const Verified = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
 const navigate=useNavigate()
const [emailVerified, setEmailVerified]=useState(false)
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      if (currentUser) {
        if (currentUser.emailVerified) {
         message.info('Email is verified');

        } else {
         message.info('Email is not verified');
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
    onSubmit: () => {
      
  // if (emailVerified) {
  //   navigate('/proAcc');
  // } else {
  //   setConfirmationMessage('Email is not yet verified.');
  // }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // formik.handleSubmit();
    if (emailVerified) {
      navigate('/proAcc');
    } else {
      setConfirmationMessage('Email is not yet verified.');
    } 
  };


  return (
    <div>
      <div className='signUpContentV'>
        <div className='signUpFormV'>
          <img className='signLogoV' src={require('../../Assest/LOGO.png')} alt="Logo" />
          <div className='formDivV'>
            <div className='formV'>
              <h1>Verification Code</h1>
              <p>We emailed you a link please click on link and verify your email</p>
                   <div>
                    {emailVerified ?(<p className='verifyEmail'>Email verified now you can accessc your account</p>):
                    <p className='verifyEmail'>Your email is not verified</p>
                    }
                   </div>
              {/* <input
                className='emailVv'
                type="text"
                placeholder="your one-time six-digit code"
                value={confirmationCode}
                onChange={handleConfirmationCodeChange}
                required
                name="code" 
                {...formik.getFieldProps('code')} 
              /> */}
              {/* {formik.touched.code && formik.errors.code ? (
                <div className="errorV">{formik.errors.code}</div>
              ) : null} */}

              <button className='verifyBtn' type="submit" onClick={handleSubmit} >Verify Now</button>
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


