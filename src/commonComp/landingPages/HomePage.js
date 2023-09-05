import React from 'react'
import '../landingPages/homepage.css'
import Button from './Button';
const HomePage = (props) => {
    const {image,title,description,dotImg,button,button1} = props;
     
    // console.log(image);
  return (
                <div className='menu'>
                    <div className='menutext'>
                      {/* <div className='hhh'> */}
                    <div className='dottI'>
                   
                       
                    </div>
                      <div className='textHead'>
                      <h1 className='menuHead'>{title}</h1>
                        <p className='menuPara'>{description}</p>
                       <div className='buttonstyle'>
                         {button?(<Button 
                         bgclr='#F37357'
                         width='170px'
                         height='50px'
                         radius={'3px'}
                         textColor={'white'}
                         border={'#F37357'}
                         textSize={'16px'}

                         btnText={button}/>):(null)}
                         {button1?(<Button 
                           bgclr='white'
                         width='170px'
                         height='50px'
                         radius={'3px'}
                         textColor={'#192E46'}
                         border={''}
                         textSize={'16px'}
                         btnText={button}/>):(null)}
                       </div> 
                       {/* </div> */}
                      </div>
                    </div>
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg'/>
                    </div>
                   
                </div>
    //         </div>
    // </div>
  )
}

export default HomePage


