import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {axiosInstance} from '../../../axiosConfig';
import {BaseResetComp} from './BaseReset.styles'
import mainImg from '../../../assets/images/main_img.svg'
import { useNavigate } from "react-router-dom";

interface SigninFormValues {
  email: string;
  uniqueString: string;
}

const SendOtpReset = () => {
  const [loading, setLoading] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [email,setEmail]=useState('')
  const navigate = useNavigate();

  const onFinish = async (values: SigninFormValues) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/send-otp', values);
      setLoading(false);
      console.log(response.data)
      return navigate('/reset-pass');
    } catch (error:any) {
        setLoading(false);
        const {errors}=error.response.data
        return message.error(errors[0].message);
    }
   
  };
  const handelOtpResend=async()=>{
    setLoadingResend(true);
    try {
      const response = await axiosInstance.post('/users/resend-otp-reset', {email});
      setLoadingResend(false);
      console.log(response.data)
      return message.success(response.data.msg);
    } catch (error:any) {
        setLoadingResend(false);
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
        <Input onChange={(e)=>setEmail(e.target.value)} type="email"/>
      </Form.Item>
      <Form.Item
        label="Otp"
        name="uniqueString"
        rules={[{ required: true, message: 'Please input otp that sent to your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button className='btn' type="primary" onClick={handelOtpResend} loading={loadingResend}>
          Resend Otp
        </Button>
      </Form.Item>
     
      <Form.Item>
        <Button className='btn' type="primary" htmlType="submit" loading={loading}>
          Next
        </Button>
      </Form.Item>
    </Form>
    <img src={mainImg} alt='main'/>
    </BaseResetComp>
  );
};

export default SendOtpReset;

