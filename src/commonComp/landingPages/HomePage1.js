import React from 'react'
import { useState } from 'react'
import { Data } from '../Data'
import HomePage from './HomePage'
import Button from './Button'
// const HomePage1 = () => {
//     const [ dataVal , setDataVal]=useState(Data)
//     console.log(dataVal)
//   return (
//       <div >
//    {dataVal.map((item, index) => (
//                 <HomePage 
//                   id={index} 
//                   title={item.title}
//                   description={item.description}
//                   image={item.image} 
//                   dotImg={item.dotImg}         
//                 />
//             ))}
        
//     </div>
//   )
// }

// export default HomePage1
import ReactFullpage from "@fullpage/react-fullpage";
import '../landingPages/style.css'
import NavBar from '../navBar/NavBar';

const HomePage1 = () => {
    const sectionsData = Data;
    const [dataVal, setDataVal] = useState(sectionsData);
  
    return (
      <div>
        {/* <NavBar />  */}
        <ReactFullpage
          navigation={true}
          scrollOverflow={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {dataVal.map((section, number) => (
                  <div className="section" key={number}>
                    <HomePage
                    
                      image={section.image}
                      title={section.title}
                      description={section.description}
                      // dotImg={section.dotImg}
                      button={section.button}
                      button1={section.button2}
                    />
                    {/* {section.button?(<Button bgclr={'red'} btnText={section.button}/>):(null)} */}
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
  export default HomePage1