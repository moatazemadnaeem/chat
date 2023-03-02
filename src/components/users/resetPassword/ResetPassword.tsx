import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {axiosInstance} from '../../../axiosConfig';
import {BaseResetComp} from './BaseReset.styles'
import mainImg from '../../../assets/images/main_img.svg'
import { useNavigate } from "react-router-dom";

interface SigninFormValues {
  email: string;
  newpass: string;
}

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: SigninFormValues) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/reset-pass', values);
      setLoading(false);
      console.log(response.data)
      return navigate('/signin');
    } catch (error:any) {
        setLoading(false);
        const {errors}=error.response.data
        return message.error(errors[0].message);
    }
   
  };

  return (
    <BaseResetComp>
    <Form className='form' onFinish={onFinish} layout='vertical'>
   
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email to reset!' }]}
      >
        <Input type="email"/>
      </Form.Item>
      <Form.Item
        label="New Password"
        name="newpass"
        rules={[{ required: true, message: 'Please input otp that sent to your email!' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item>
        <Button className='btn' type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    <img src={mainImg} alt='main'/>
    </BaseResetComp>
  );
};

export default ResetPassword;


