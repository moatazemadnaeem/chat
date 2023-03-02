import styled from 'styled-components'
import {goldColor} from '../../../utils/sharedStyles'
export const BaseResetComp=styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 height: 100vh;
 .form{
    width: 300px;
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