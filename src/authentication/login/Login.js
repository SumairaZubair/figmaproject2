
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { auth } from '../fFirebaseConfig';
import {  signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
    
    console.log('login succesfully');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };

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
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <div className='form-group'>
                      <Field
                        type='email'
                        className='addresss'
                        name='email'
                        placeholder='Email'
                        onFocus={(e) => e.target.style.borderColor = 'orange'}
                      />
                      <ErrorMessage name='email' component='div' className='error' />
                    </div>
                    <div className='form-group'>
                      <Field
                        type='password'
                        className='passwordd'
                        name='password'
                        placeholder='Password'
                        onFocus={(e) => e.target.style.borderColor = 'orange'}
                      />
                      <ErrorMessage name='password' component='div' className='error' />
                    </div>
                    <button className='sign-button' type='submit'>
                      Sign Up Now
                    </button>
                  </Form>
                </Formik>
                <p className='forgot' onClick={() => navigate('/forget')}>
                  Forgot Password
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

