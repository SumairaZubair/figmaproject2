
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <div className='signUpContentt'>
        <div className='signUpFormm'>
          <img className='signLogoo' src={require('../../Assest/LOGO.png')} alt='Logo' />
          <div className='form-Div'>
            <div className='formm'>
              <div className='sign/loginBtns'>
                <button className='signInn'>Sign In</button>
                <button className='signUpss' onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
              <div className='feildd'>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    className='addresss'
                    type='email'
                    placeholder='Email'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                  ) : null}
                  <input
                    className='passwordd'
                    type='password'
                    placeholder='Password'
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='error'>{formik.errors.password}</div>
                  ) : null}
                  <button className='sign-button' type='submit'>
                    Sign Up Now
                  </button>
                </form>
                <p className='forgot' onClick={() => navigate('/forget')}>
                  Forgot Password
                </p>
                <div className='connected'>
                  <p className='linee'></p>
                  <p>Or Connect With</p>
                  <p className='linee'></p>
                </div>
                {/* <div className='fb-tweeter'>
                  <button className='facebookk'>Facebook</button>
                  <button className='twittter'>Twitter</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
