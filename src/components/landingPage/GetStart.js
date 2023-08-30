// import Modal from 'antd/es/modal/Modal';

import './getStart.css'


const GetStart = () =>{
   
    return (
        <div>
            <div className='main'>
               
                <div>
                    <div className='content'>
                        <div className='dot'>
                            <img className='dots' src={require('../../Assest/dot.png')} />
                        </div>
                        <div className='takeMeal'>
                            <p className='mealText'>Take your meal  <br/>prep company
                             to the <span className='nextLevel'>next level</span></p>
                            <p className='mealPara'><span>cottage</span>
                                will help you reach more customers and simplify managing your site, your menus, and your orders, letting you focus on delivering great food.</p>
                            <div className='buttonn'>
                                <button className='started'>GET STARTED</button>
                                <button className='more'>LEARN MORE</button>
                            </div>
                        </div>

                        <div className='overView'>
                             
                                  
                                        <img className='homepage' src={require('../../Assest/homepagew.png')}/>
                                        <div className='pinkDots'>
                                    {/* <img className='pink' src={require('../../Assest/pinkdots.png')}/> */}
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                   
       
                </div>
           
       
    )
}

export default GetStart