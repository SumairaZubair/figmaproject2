import React from 'react'
import '../landingPages/homepage.css'
const HomePage = (props) => {
    const {image,title,description,dotImg} = props;
    
    console.log(image);
  return (
      <div className='fixBg'>
        {/* <NavBar/> */}
     <div className='mainn'>
                <div className='menu'>
                    <div className='dottI'>
                    <img src={dotImg}/>
                       
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>{title}</h1>
                        <p className='menuPara'>{description}</p>
                    </div>
                    <div className='menuItemImg'>
                    <img src={image} className='menuItemImg'/>
                       
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default HomePage



