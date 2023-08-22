import { useNavigate } from 'react-router-dom';
import '../navBar/navBar.css'
const NavBar =()=>{
    const navigate = useNavigate();

    const handleForm=()=>{
       navigate('/signUp')
    }
    return(
        <div>

<div className="nav">
                    <div>

                        <img className='cottage' src={require('../../Assest/LOGO.png')} alt='cottage' />
                    </div>
                    <div>
                        <button className='signin' onClick={handleForm}>SIGN IN</button>
                    </div>
                </div>
        </div>
    )
}

export default NavBar