import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {axiosInstance} from '../../../axiosConfig';
import {BaseResendComp} from './BaseResend.styles'
import mainImg from '../../../assets/images/main_img.svg'


interface SigninFormValues {
  email: string;
}

const ResendOtp = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: SigninFormValues) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/resend-otp', values);
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
    <BaseResendComp>
    <Form className='form' onFinish={onFinish} layout='vertical'>
   
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email to resend!' }]}
      >
        <Input type="email"/>
      </Form.Item>
     
  
      <Form.Item>
        <Button className='btn' type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    

    </Form>
    <img src={mainImg} alt='main'/>
    </BaseResendComp>
  );
};

export default ResendOtp;
