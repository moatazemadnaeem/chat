import React, { useState } from 'react';
import { Form, Input, Button, message , Select} from 'antd';
import {axiosInstance} from '../../../axiosConfig';
import {SignUpComp} from './Signup.styles'
import mainImg from '../../../assets/images/main_img.svg'
import { Link , useNavigate } from "react-router-dom";

interface SignupFormValues {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const onFinish = async (values: SignupFormValues) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/create_user', values);
      setLoading(false);
      console.log(response.data)
      return navigate('/verify_user');
    } catch (error:any) {
        setLoading(false);
        const {errors}=error.response.data
        return message.error(errors[0].message);
    }
   
  };

  return (
    <SignUpComp>
    <Form className='form' onFinish={onFinish} layout='vertical'>
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="email"/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Please input your role!' }]}
      >
       <Select options={[{value:'developer',label:'Developer'},{value:'client',label:'Client'}]}/>
      </Form.Item>
      <Form.Item>
        <Button className='btn' type="primary" htmlType="submit" loading={loading}>
          Signup
        </Button>
      </Form.Item>
      <div className='signin'>
      <span>Already have an account ?</span>
      <Link className='signin_link' to='/signin'>SignIn</Link>
      </div>
    </Form>
    <img src={mainImg} alt='main'/>
    </SignUpComp>
  );
};

export default Signup;
