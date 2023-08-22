import '../landingPage/mealItem.css'
import NavBar from '../navBar/NavBar'
const MealItem =()=>{
    return(
        <div>
           <div className='mainn'>
                <NavBar />
                <div className='menu'>
                    <div className='menuItemImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Schedule your menu items</h1>
                        <p  className='menuPara'>Use <span>Cottage</span> whether you're an occasional meal prep company or a multi-location enterprise, you can use schedules to make menu items only available on certain days. Also use schedules to set a deadline for ordering.</p>
                    </div>
                    <div className='dott'>
                        <img className='dott' src={require('../../Assest/dot.png')}/>
                    </div>
                    <div className='pinkdot'>
                        <img src={require('../../Assest/pinkdots.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealItem