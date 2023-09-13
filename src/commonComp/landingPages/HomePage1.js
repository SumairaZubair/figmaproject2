import React from 'react'
import { useState } from 'react'
import { Data } from '../Data'
import HomePage from './HomePage'

import '../landingPages/style.css'

const HomePage1 = () => {
    const sectionsData = Data;
    const [dataVal, setDataVal] = useState(sectionsData);
  
    return (
      <div>
       
                {dataVal.map((section, number) => (
                  <div className="section" key={number}>
                    <HomePage
                    
                      image={section.image}
                      title={section.title}
                      description={section.description}
                      button={section.button}
                      button1={section.button2}
                      />
                  </div>
                ))}
                {/* <LastHomePage/> */}
            
      </div>
    );
  }
  export default HomePage1