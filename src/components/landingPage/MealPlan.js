import '../landingPage/mealPlan.css'
const MealPlan =()=>{
    return(
        <div>

<div className='mainn'>
                <div className='menuPlan'>
                <div className='dottP'>
                        <img className='dottP' src={require('../../Assest/dot.png')}/>
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Meal plans are easy to manage</h1>
                        <p  className='menuPara'><span>Cottage</span> lets your customers buy meals from you one at a time, or buy meal plans from you. When customers sign up for one of your plans, Cottage will keep track of which plan they have and how much of it they've used. At checkout time, customers will automatically have their plan applied to their purchases.</p>
                    </div>
                    
                    <div className='menuPlanImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='pinkdot'>
                        {/* <img src={require('../../Assest/pinkdots.png')}/> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MealPlan