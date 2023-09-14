// import React from 'react'
// import '../landingPages/homepage.css'
// import Button from '../button/Button';
// import '../landingPages/style.css'
// const HomePage = (props) => {
//     const {image,title,description,button,button1} = props;
     
//   return (
   
//                 <div className='menu'>
//                     <div className='dottI'>
//                    <img src={require('../Assest/dot.png')} alt='dotimg'/>
            
//                     </div>
//                     <div className='menutext'>
                    
//                       <div className='textHead'>
//                       <h1 className='menuHead'>{title}</h1>
//                         <p className='menuPara'>{description}</p>
//                        <div className='buttonstyle'>
//                          {button?(<Button
//                          bgclr='#F37357'
//                          textColor={'white'}
//                          border={'#F37357'}
                         

//                          btnText={button}/>):(null)}

//                          {button1?(<Button 
//                            bgclr='white'
//                          border={''}
                
//                          btnText={button}/>):(null)}
//                        </div> 
                     
//                       </div>
//                     </div>
//                     <div className='menuItemImg'>
//                     <img src={image} className='menuItemImg' alt='homepageimg'/>
//                     </div>
              
//                 </div>

//   )

// }

// export default HomePage


import React, { useState } from 'react';
import { Data } from '../Data';
import Button from '../button/Button';
import '../landingPages/homepage.scss';
import '../landingPages/style.css';
import LastHomePage from '../lastHomePage/LastHomePage';

const HomePage = () => {
  const sectionsData = Data;
  const [dataVal, setDataVal] = useState(sectionsData);

  return (
    <div>
      {dataVal.map((section, number) => (
        <div className="section" key={number}>
          <div className="menu">
            <div className="dottI">
              <img src={require('../Assest/dot.png')} alt="dotimg" />
            </div>
            <div className="menutext">
              <div className="textHead">
                <h1 className="menuHead">{section.title}</h1>
                <p className="menuPara">{section.description}</p>
                <div className="buttonstyle">
                  {section.button ? (
                    <Button bgclr="#F37357" textColor={'white'} border={'#F37357'} btnText={section.button} />
                  ) : null}
                  {section.button2 ? (
                    <Button bgclr="white" border={''} btnText={section.button2} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="menuItemImg">
              <img src={section.image} className="menuItemImg" alt="homepageimg" />
            </div>
          </div>
        </div>
      ))}
     <div className='section'>
     <LastHomePage/>
     </div>
    </div>
  );
};

export default HomePage;




