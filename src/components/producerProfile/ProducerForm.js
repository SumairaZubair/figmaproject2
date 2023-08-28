import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';


const ProducerForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const onFinish = (values) => {
      console.log('Form values:', values);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="My Modal" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Form onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };
  
  export default ProducerForm;
  