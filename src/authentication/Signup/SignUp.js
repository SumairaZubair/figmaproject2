

import './signUp.scss';
import React, { useState } from 'react';
import {  Formik ,Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword ,sendEmailVerification} from 'firebase/auth';
import { Modal as AntModal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../fFirebaseConfig';

const SignUp = () => {
  const Navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigateLogin = () => {
    Navigate('/login');
  };

  return (
    <div>
      <div className="signUpContent">
        <div className="signUpForm">
          <img className="signLogo" src={require('../../Assest/LOGO.png')} alt="Logo" />
          <div className="formDiv">
            <div className="form">
              <div className="sign/loginBtns">
                <button className="signIn" onClick={navigateLogin}>
                  Sign In
                </button>
                <button className="signUps">Sign Up</button>
              </div>
              <div className="feild">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required('First Name is required'),
                    lastName: Yup.string().required('Last Name is required'),
                    email: Yup.string().email('Invalid email address').required('Email is required'),
                    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
                    confirmPassword: Yup.string()
                      .min(6, 'Password must be at least 6 characters')
                      .required('Required')
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Confirm Password is required'),
                  })}
                  onSubmit={async (values) => {
                    try {
                      await  createUserWithEmailAndPassword(auth, values.email, values.password)
                      sendEmailVerification(auth.currentUser)
                      console.log('User signed up successfully!');
                      Navigate('/verify');
                    } catch (error) {
                      console.error('Error signing up:', error.message);
                    }
                    // resetForm()
                  }}
                >
                  <Form>
  <div className="flex-div" >
  <Field
    className="name"
    type="text"
    name="firstName"
    placeholder="First Name"
  />
  
  <Field
    className="name"
    type="text"
    name="lastName"
    placeholder="Last Name"
  />
</div>
<div className='error-flex'>
<ErrorMessage name="firstName" component="div" className="error" />
  <ErrorMessage name="lastName" component="div" className="error" />
</div>
                    <Field className="email" type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field
                      className="address"
                      type="password"
                      name="password"
                      placeholder="password"
                    />
                 <ErrorMessage name="password" component="div" className="error" />

                    <Field
                      className="password"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                    />
                 <ErrorMessage name="confirmPassword" component="div" className="error" />

                    <button className="signbutton" type="submit">
                      Sign Up Now
                    </button>
                  </Form>
                </Formik>
                <p className="terms">
                  By continuing, I agree to Cottage’s{' '}
                  <span onClick={showModal}>Terms & Conditions.</span>
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <AntModal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>
          Risus quis cursus tristique nisl. Neque nec eget volutpat pellentesque suscipit amet. Feugiat fames porta
          dapibus molestie eget ut. Orci non integer mauris pellentesque velit turpis gravida. Nibh ipsum vulputate
          faucibus nibh. Erat pellentesque augue nibh vestibulum. Et fermentum, egestas scelerisque odio praesent. Non
          nec scelerisque enim, suspendisse. Sit elit lectus morbi cursus cursus accumsan. Habitasse nulla eget urna,
          dignissim dignissim fames. Ac phasellus proin sed aenean neque, sed egestas viverra lectus. Orci non tristique
          eget phasellus. Aliquam ullamcorper sag
        </p>
      </AntModal>
    </div>
  );
};

export default SignUp;


