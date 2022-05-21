import React from'react'
import styled from 'styled-components'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`




const Stake = () =>{
    return(
        <Section>
            Stake
        </Section>
    )
    
}

export default Stake