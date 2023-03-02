import styled from 'styled-components'
import {goldColor} from '../../../utils/sharedStyles'
export const VerfiyComp=styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
color: white;
img{
    width: 300px;
}
h2{
    width: 400px;
    line-height: 2rem;
}
.base_link{
    color: ${goldColor};
    font-weight: bold;
    text-decoration: none;
}
@media (max-width:850px) {
    &{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        h2{
            width: 100%;
            text-align: center;
            margin-bottom: 5rem;
        }
        img{
            width: 100%;
            max-width: 300px;
        }
    }
}
`