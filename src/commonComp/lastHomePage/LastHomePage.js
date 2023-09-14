import React from 'react'
import '../lastHomePage/lastHomePage.scss'
const LastHomePage = () => {
  return (
    <div>
    <div className="trackbg">
        {/* <NavBar /> */}
        <div className='mainDiv'>
            <div className='trackHead'>
                <h1>Track your business<br/> performance</h1>
                <p>Use <span>Cottage</span> reports to figure out which menu items are selling the best and who your most frequent customers are</p>
            </div>
            <button className='trackBtn'>GET STARTED</button>
            <div className='trackImg'>
                {/* <img className='trackImg' src={require('../../Assest/trackimg.png')} alt='track'/> */}
            </div>
            <div className='trackimg'>

            </div>
        </div>
    </div>
</div>
  )
}

export default LastHomePage
