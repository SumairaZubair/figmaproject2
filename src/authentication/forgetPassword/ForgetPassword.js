
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import '../forgetPassword/fogetPasswod.css';

const ForgetPassword = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const onSubmit = (values) => {
    setInstruction(
      'If your email address is exists in our database, you will receive a password recovery link at your email address in a few minutes'
    );
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

  const [instruction, setInstruction] = React.useState('');
  const [close, setClose] = React.useState(false);

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
                  Send Instruction
                </button>
              </form>
              <p className='confirmMsg'>{instruction}</p>
              <p className='forgetPara'>Sign In</p>
              <p className='forgetPara'>Create Account</p>
              <p className='forgetPara'>Didn’t receive unlock instruction?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
