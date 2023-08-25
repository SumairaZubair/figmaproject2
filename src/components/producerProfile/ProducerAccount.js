// import React from 'react'
// // import '../..'
// import { Card, Row, Col, Button } from 'antd';

// // import ProducerNavbar from '../producerNavbar/ProducerNavbar'
// import { EditOutlined } from '@ant-design/icons';
// function ProducerAccount() {
//     return (
//         <div>
//             {/* <ProducerNavbar/> */}
//             <div className="ProducerProfile" style={{ padding: '40px', margin: "12px", background: "#4C68890D" }}>
//                 <div className='producerProfileflex'>
//                     <Row gutter={13}>
//                         {/* Left wala bada card */}
//                         {/* <Col span={5}> */}
//                         <Col xs={24} sm={5} >
//                             <Card title={<EditOutlined />} className=" pen"
//                                 type="inner">
//                                 <div className='profilecard'>
//                                     {/* <img src={require('../ProducerAccountPic/Group209.png')}/> */}
//                                     <h3>Jonathan Snow</h3>
//                                     <p>jonathan.s45@gmail.com</p>
//                                     <p>(319) 555-0115</p>
//                                     <Button type='default'>CHANGE PASSWORD</Button>
//                                 </div>
//                             </Card>
//                         </Col>

//                         <Col xs={19} sm={16}>
//                             <Card title={<div className='part' >
//                                 <span className='active'>You have <span>2</span> active businesses</span>
//                                 <Button type="primary" className=" btnpri">+ Add Business</Button>
//                             </div>} className='rightcard'>

//                                 <div className='cards2'>
//                                     <Card type="inner" title={<div className="local">
//                                         <span style={{ fontSize: "19px" }}>Upper Crust Pizza</span>
//                                         <Button type="primary" className=" pri">➕</Button>
//                                     </div>}>
//                                         <div className='cardflex'><p>NAME</p><p>DOMAIN</p></div>
//                                         <div className='cardflex tag'><p>Miami</p><p>../uppercrust/miami</p><Button type="primary" className="dashbtn">Dashboard</Button></div>
//                                     </Card>
//                                 </div>
//                                 <div className='cards2'>
//                                     <Card type="inner" title={<div style={{ display: 'flex', justifyContent: 'space-between', height: "60px", alignItems: 'center', fontWeight: "700" }}>
//                                         <span style={{ fontSize: "19px" }}>Ideal Nutrition</span>
//                                         <Button type="primary" className=" pri">➕</Button>
//                                     </div>}>
//                                         <div className='cardflex'><p>NAME</p><p>DOMAIN</p></div>
//                                         <div className='cardflex tag'><p>Miami</p><p>../uppercrust/miami</p><Button type="primary" className="dashbtn">Dashboard</Button></div>
//                                         <div className='cardflex tag'><p>Miami</p><p>../uppercrust/miami</p><Button type="primary" className="dashbtn">Dashboard</Button></div>
//                                     </Card>
//                                 </div>

//                             </Card>
//                         </Col>
//                     </Row>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProducerAccount




import {useState} from 'react';
import { Card, Row, Col, Button, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons'
import '../../components/producerProfile/producerAcc.css'
import ProducerNavbar from './accountNavBar/ProducerNavbar';
// import { useState } from 'react';
function ProducerAccount() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <ProducerNavbar/>
      <div className="producer-profile" style={{ padding: '10px', margin: "5px", background: "#f9f9f9" }}>
        <div className='producer-profile-flex'>
          <Row gutter={13}>
            {/* Left Card */}
            <Col xs={24} sm={12} lg={8}>
              <Card
                title={<EditOutlined className="pen-card" />}
                className="side-card"
                type="inner"
              >
                <img className='man' src={require('../../Assest/man.png')} />
                <div className='profile-card'>
                  <h3>Jonathan Snow</h3>
                  <p>jonathan.s45@gmail.com</p>
                  <p>(319) 555-0115</p>
                  <Button type='default'>CHANGE PASSWORD</Button>
                </div>
              </Card>
            </Col>

            {/* Right Card */}
            <Col xs={24} sm={12} lg={16}>
              <Card
                title={
                  <div className='part'>
                    <span className='active'>You have <span>2</span> active businesses</span>
                    <Button type="primary" className="btn-add" onClick={showModal}>+ Add Business</Button>
                  </div>
                }
                className='right-card'
              >
                {/* Content Sections */}
                <div className='cards-2'>
                  <Card
                    type="inner"
                    title={
                      <div className="local">
                        <span style={{ fontSize: "19px" }}>Upper Crust Pizza</span>
                        <Button type="primary" className="plus">+</Button>
                      </div>

                    }
                    className='pizzaCard'
                  >
                     <div className='big-flex'>
                    <div className='main-card'>

                      <div className='card-flex'>
                        <p className='p'>NAME</p>
                      </div>
                      
                      <div>
                      <p className='pp'>
                      Miami
                      </p>
                      </div>

                    </div>
                     <div className='dashBtn'>
                      <div className='card-flextag'><p className='p'>Domain</p>
                      </div>
                     <div>
                     <p className='pp'>../uppercrust/miami</p>
                     </div>
                     </div>
                   
                    <Button type="primary" className="dashboardBtn">Dashboard<RightOutlined />  </Button>
                   
                     </div>
                  </Card>
                </div>
                <div className='cards-2'>
                  {/* <Card
                    type="inner"
                    title={
                      <div style={{ display: 'flex', justifyContent: 'space-between', height: "60px", alignItems: 'center', fontWeight: "700" }}>
                        <span style={{ fontSize: "19px" }}>Ideal Nutrition</span>
                        <Button type="primary" className="plus">➕</Button>
                      </div>
                    }
                  >
                    <div className='card-flex'><p>NAME</p><p>DOMAIN</p></div>
                    <div className='card-flex tag'><p>Miami</p><p>../uppercrust/miami</p><Button type="primary" className="dashboardBtn">Dashboard</Button></div>
                    <div className='card-flex tag'><p>Miami</p><p>../uppercrust/miami</p><Button type="primary" className="dashboardBtn">Dashboard</Button></div>
                  </Card> */}


<Card
                    type="inner"
                    title={
                      <div className="local">
                        <span style={{ fontSize: "19px" }}>Upper Crust Pizza</span>
                        <Button type="primary" className="plus">+</Button>
                      </div>

                    }
                    className='pizzaCard'
                  >
                     <div className='big-flex'>
                    <div className='main-card'>

                      <div className='card-flex'>
                        <p className='p'>NAME</p>
                      </div>
                      
                      <div>
                      <p className='pp'>
                      Los Angeles
                      </p>
                      </div>

                    </div>
                     <div className='dashBtn'>
                      <div className='card-flextag'><p className='p'>Domain</p>
                      </div>
                     <div>
                     <p className='pp'>../uppercrust/miami</p>
                     </div>
                     </div>
                   
                    <Button type="primary" className="dashboardBtn">Dashboard<RightOutlined />  </Button>
                   
                     </div>
                  </Card>

                  <Card
                    type="inner"
                    // title={
                    //   <div className="local">
                    //     <span style={{ fontSize: "19px" }}>Upper Crust Pizza</span>
                    //     <Button type="primary" className="plus">+</Button>
                    //   </div>

                    // }
                    className='pizzaCard'
                  >
                     <div className='big-flex'>
                    <div className='main-card'>

                      <div className='card-flex'>
                        <p className='p'>NAME</p>
                      </div>
                      
                      <div>
                      <p className='pp'>
                      San Diego
                      </p>
                      </div>

                    </div>
                     <div className='dashBtn'>
                      <div className='card-flextag'><p className='p'>Domain</p>
                      </div>
                     <div>
                     <p className='pp'>../uppercrust/miami</p>
                     </div>
                     </div>
                   
                    <Button type="primary" className="dashboardBtn">Dashboard <RightOutlined /> </Button>
                   
                     </div>
                  </Card>


                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        
       open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 0, height: '100vh', margin: 0 }}
        width="100%"
        bodyStyle={{ height: 'calc(100vh - 50px)', overflowY: 'auto' }}
        maskClosable={false}
      >
        {/* Content for the full-page modal goes here */}
        <p>This is a full-page modal content.</p>
        <p>You can add any content you want.</p>
      </Modal>
    </div>


    
  )
}

export default ProducerAccount;

