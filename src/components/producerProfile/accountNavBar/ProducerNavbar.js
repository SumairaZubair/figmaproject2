import '../../producerProfile/accountNavBar/producerNavbar.scss'
import { Menu, Dropdown } from 'antd';
import React from 'react';




const ProducerNavbar = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Account</Menu.Item>
            <Menu.Item key="2">Help</Menu.Item>
            <Menu.Item key="3">Log out</Menu.Item>
        </Menu>
    )
    return (
        <div>
            <div className="producerNav">
                <div className="producerNavImg">
                    <img className='proImg' src={require('../../../Assest/LOGO.png')} />
                </div>
                <div className="producerNavText">
                    <p className='navbarText'>Sign In</p>

                    <Dropdown open={menu} trigger={['click']}>
                        <img src={require('../../../Assest/avatar.png')} />
                    </Dropdown>
                    <img src={require('../../../Assest/arrow.png')} />
                </div>
            </div>

</div>



    




    )
}

export default ProducerNavbar