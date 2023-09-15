
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'; 
import { auth } from '../fFirebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import '../forgetPassword/fogetPasswod.scss';
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [close, setClose] = useState(false);
const navigate= useNavigate()
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const onSubmit = async (values) => {
    try {
      await sendPasswordResetEmail(auth,values.email)
      message.success({
        content: 'Check your email.',
        className: 'custom-message', 
      });
navigate('/login')
      // 
      setInstruction(
        'If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes'
      );
    } catch (error) {
      message.error('reset password failed')
      console.error('Error setPassword:', error.message);
    }
   
    if (close) {
      setInstruction('');
    } else {
      setInstruction(
        'If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes'
      );
    }
    setClose(!close);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const toggleInstruction = () => {
    setInstruction(!instruction);
  };

  const [instruction, setInstruction] = useState(false);

  return (
    <div>
      <div className='signUpContentV'>
        <div className='signUpFormV'>
          <img className='signLogoV' src={require('../../Assest/LOGO.png')} alt='Logo' />
          <div className='formDivV'>
            <div className='formV'>
              <h1>Forget Password</h1>
              <form onSubmit={formik.handleSubmit}>
                <input
                  className='emailV'
                  type='email'
                  placeholder='email'
                  {...formik.getFieldProps('email')}
                  required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='errorP'>{formik.errors.email}</div>
                  ) : null}
                <button className='verifyBtn' type='submit'>
                  Send 
                </button>
              </form>
              {instruction && (
        <p className='confirmMsg'>       
         'If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes'
        </p>
          )}
        
              <p className='forgetPara' onClick={()=>{navigate('/login')}}>Sign In</p>
              <p className='forgetPara' onClick={()=>{navigate('/signUp')}}>Create Account</p>
              <p className='forgetPara' onClick={toggleInstruction} >Didn’t receive unlock instruction?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;



