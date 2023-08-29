import '../../components/landingPage/mealManu.css'

const MealManu = () => {
    return (
        <div>
            <div className='mainn'>
                <div className='menu'>
                    <div className='menuImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Offer your menu the way you want</h1>
                        <p  className='menuPara'>Use <span>Cottage</span> to set up a menu and decide which items are available on which days. Create different locations for your meal prep company to manage them separately. Offer your customers discount codes with a few clicks.</p>
                    </div>
                    <div className='dottt'>
                        <img className='dottt' src={require('../../Assest/dot.png')}/>
                    </div>
                    <div className='pinkdot'>
                        <img src={require('../../Assest/pinkdots.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealManu