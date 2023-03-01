import React from 'react'
import {VerfiyComp} from './Verify.styles'
import verifyImg from '../../../assets/images/verify.svg'
import { Link  } from "react-router-dom";

function Verify() {
  return (
    <VerfiyComp>
        <h2>You Signed Up Successfully,<br/> Please Check Your Email To Verify Your Account.
        <Link className='signin_link' to='/signin'> SignIn</Link>
        </h2>
        <img src={verifyImg} alt='verfiy'/>
    </VerfiyComp>
  )
}

export default Verify