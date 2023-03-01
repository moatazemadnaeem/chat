import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {axiosInstance} from '../../../axiosConfig';
import {SignInComp} from './Signin.styles'
import mainImg from '../../../assets/images/main_img.svg'
import { Link } from "react-router-dom";

interface SigninFormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: SigninFormValues) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/signin', values);
      setLoading(false);
      console.log(response.data)
      return message.success(response.data.msg);
    } catch (error:any) {
        setLoading(false);
        const {errors}=error.response.data
        return message.error(errors[0].message);
    }
   
  };

  return (
    <SignInComp>
    <Form className='form' onFinish={onFinish} layout='vertical'>
   
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item>
        <Button className='btn' type="primary" htmlType="submit" loading={loading}>
          Signin
        </Button>
      </Form.Item>
      <div className='signup'>
      <span>Do Not have an account ?</span>
      <Link className='signup_link' to='/'>SignUp</Link>
      </div>
    </Form>
    <img src={mainImg} alt='main'/>
    </SignInComp>
  );
};

export default Signin;
