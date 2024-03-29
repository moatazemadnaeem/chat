import styled from 'styled-components'
import {goldColor} from '../../../utils/sharedStyles'
export const SignUpComp=styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 height: 100vh;
 .form{
    label{
        color: white;
    }
 }
 .btn{
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    font-weight: bold;
 }
 .btn:hover{
    background-color: ${goldColor};
    border: 1px solid ${goldColor};
    color: white;
 }
 .signin{
    display: flex;
    justify-content: center;
    span{
        color: white;
        margin-right: 5px;
    }
 }
 .signin_link{
    color: ${goldColor};
    font-weight: bold;
 }
 img{
    width: 300px;
 }
@media (max-width:850px) {
    &{
        img{
            display: none;
        }
    }
}
`