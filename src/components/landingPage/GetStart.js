// import Modal from 'antd/es/modal/Modal';
import NavBar from '../navBar/NavBar';
import Track from './Track';
import MealManu from './MeaLMenu';
import MealItem from './MealItem';
import MealPlan from './MealPlan';
import Order from './Order';
import './getStart.css'
// import { useNavigate } from 'react-router-dom';
const GetStart = () => {
   
    return (
        <div>
            <div className='main'>
               <NavBar/>
                <div>
                    <div className='content'>
                        <div className='dot'>
                            <img className='dots' src={require('../../Assest/dot.png')} />
                        </div>
                        <div className='takeMeal'>
                            <p className='mealText'>Take your meal  <br/>prep company
                             to the <span>next level</span></p>
                            <p className='mealPara'><span>cottage</span>
                                will help you reach more customers and simplify managing your site, your menus, and your orders, letting you focus on delivering great food.</p>
                            <div className='button'>
                                <button className='started'>GET STARTED</button>
                                <button className='more'>LEARN MORE</button>
                            </div>
                        </div>

                        <div className='overView'>
                             {/* <div className='idealNav'>
                                <div className='navContent'>
                                    <div className='picLeave'>
                                        <img className='leave' src={require('../../Assest/leave.png')} />

                                    </div>
                                    <div><p className='idealtext'>Ideal Nutrition</p></div>
                                    <div className='location'>
                                        <div>
                                            <img src={require('../../Assest/location.png')} />
                                        </div>
                                        <div><p className='west'>West Palm Beach</p></div>
                                        <div>
                                            <img src={require('../../Assest/arrow.png')} />
                                        </div>
                                    </div>
                                </div>

                                <div className='women'>
                                    <div><p className='hi'>Hi, Vanessa</p></div>
                                    <div>
                                        <img src={require('../../Assest/woman.png')} />
                                    </div>
                                </div>
                            </div>
                            <div className='rice'>
                                <div>
                                    <img className='mealimg' src={require('../../Assest/meal.png')} />
                                    <div className='upperDiv'>
                                        <p>ABOUT</p>
                                        <p>Ideal Nutrition is a fresh, never frozen, meal prep service that delivers right to your door. ​Subscribe now and get free delivery with every order. We offer new subscription discounts and discounted prices for all First Responders, Veterans, Active Military, Health Care Workers and Teachers.</p>
                                        <div>
                                            <img />
                                            <p></p>
                                        </div> 
                                    </div> */}
                                  
                                        <img className='homepage' src={require('../../Assest/homepagew.png')}/>
                                        <div className='pinkDots'>
                                    <img className='pink' src={require('../../Assest/pinkdots.png')}/>
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                   <MealManu/>
                   <MealPlan/>  
                   <MealItem/>
                   <Order/>
                   <Track/>
                </div>
           
       
    )
}

export default GetStart