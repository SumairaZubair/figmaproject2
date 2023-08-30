import React from 'react';
import '../footer/footer.css';
import {InstagramOutlined} from '@ant-design/icons';
import {TwitterOutlined} from '@ant-design/icons';
import {FacebookOutlined} from '@ant-design/icons';
const Footer = () => {
  return (
    <div>
        <div className='footerMain'>
            <div className='footer'>
                <div className='aboutDiv'>
                <img src={require('../../../../Assest/homeLogo.png')}/>
                <div> <p className='footerP'>About Us Help</p></div>
                <div> <p className='footerP'>Sign in <span>Register</span></p></div>
                <div>  <p className='footerPterms'>Terms & Conditions Privacy</p></div>
                </div>
            </div>
            <div className='footerSec'>
                <div><p className='footerIconP'>2020 Cottage. All rights reserved.</p></div>
              <div className='footerIcon'>
              <p><InstagramOutlined /></p>
                <p><TwitterOutlined /></p>
                <p><FacebookOutlined /></p>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer
