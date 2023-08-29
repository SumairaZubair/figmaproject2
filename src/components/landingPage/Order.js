
import '../landingPage/order.css'
const Order=()=>{
    return(
        <div>
 
<div className='mainn'>
                <div className='menuPlan'>
                <div className='dottO'>
                        <img className='dottO' src={require('../../Assest/dot.png')}/>
                    </div>
                    <div className='menutext'>
                        <h1 className='menuHead'>Simplify your order management</h1>
                        <p  className='menuPara'><span>Cottage</span> processes your customer's orders and creates a list of menu items to be prepared, organized by day.</p>
                        < p className='payment'>Payments are handled securely by <span>Stripes</span></p>
                    </div>
                    
                    <div className='orderImg'>
                        {/* <img src={require('../../Assest/menu.png')}/> */}
                    </div>
                    <div className='pinkdot'>
                        <img src={require('../../Assest/pinkdots.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order