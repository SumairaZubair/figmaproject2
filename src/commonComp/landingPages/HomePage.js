import React from 'react'
import '../landingPages/homepage.css'
import Button from '../button/Button';
import '../landingPages/style.css'
import LastHomePage from '../lastHomePage/LastHomePage';
const HomePage = (props) => {
    const {image,title,description,button,button1} = props;
     
  return (
                <div className='menu'>
                    <div className='dottI'>
                   <img src={require('../Assest/dot.png')} alt='dotimg'/>
            
                    </div>
                    <div className='menutext'>
                    
                      <div className='textHead'>
                      <h1 className='menuHead'>{title}</h1>
                        <p className='menuPara'>{description}</p>
                       <div className='buttonstyle'>
                         {button?(<Button
                         bgclr='#F37357'
                         textColor={'white'}
                         border={'#F37357'}
                         

                         btnText={button}/>):(null)}

                         {button1?(<Button 
                           bgclr='white'
                         border={''}
                
                         btnText={button}/>):(null)}
                       </div> 
                     
                      </div>
                    </div>
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg' alt='homepageimg'/>
                    </div>
                </div>

  )

}

export default HomePage



