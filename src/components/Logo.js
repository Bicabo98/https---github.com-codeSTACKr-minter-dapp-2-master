import React from'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LogoTxt = styled.h1`
font-family:'akaya Telivigala',cursive;
font-size:${props => props.theme.fontxxxl};
color:${props => props.theme.text};
transition:all 0.2s ease;
&:hover{
    transform: scale(1.1);
}

@media (main-width: 64em){
    font-size: ${props => props.theme.fontxxl};
}
`


const Logo = () => {
    return(
        <LogoTxt>
            <Link to="/">
                Ayeko.
            </Link>
        </LogoTxt>
    )
}

export default Logo