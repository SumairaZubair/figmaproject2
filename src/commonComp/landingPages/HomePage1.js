import React from 'react'
import { useState } from 'react'
import { Data } from '../Data'
import HomePage from './HomePage'

// import ReactFullpage from "@fullpage/react-fullpage";
import '../landingPages/style.css'

const HomePage1 = () => {
    const sectionsData = Data;
    const [dataVal, setDataVal] = useState(sectionsData);
  
    return (
      <div>
        {/* <ReactFullpage
          navigation={true}
          scrollOverflow={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper> */}
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
              {/* </ReactFullpage.Wrapper>
            );
          }}
        /> */}
      </div>
    );
  }
  export default HomePage1