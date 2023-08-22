import '../landingPage/track.css'
import NavBar from '../navBar/NavBar'
const Track = () => {
    return (
        <div>
            <div className="trackbg">
                <NavBar />
                <div className='mainDiv'>
                    <div className='trackHead'>
                        <h1>Track your business<br/> performance</h1>
                        <p>Use <span>Cottage</span> reports to figure out which menu items are selling the best and who your most frequent customers are</p>
                    </div>
                    <div className='trackImg'>
                        <img className='trackImg' src={require('../../Assest/trackimg.png')} alt='track'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Track