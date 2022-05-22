import React from'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'

import { ThemeProvider } from 'styled-components'
import { dark } from '../../styles/Themes'
const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color:${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relavite;
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
    width:85%;
}

@media (max-width: 64em){
    width:100%;
    flex-direction:column;

    &>*:last-child{
        width:80%;
    }
}
@media (max-width: 40em){

    &>*:last-child{
        width:90%;
    }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height:60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

@media (max-width: 40em){
    min-height:50vh;

}
`


const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.body};
align-self: flex-start;
margin: 0 auto;

@media (max-width:64em){
    width:100%;
    text-align:center;

}
@media (max-width:40em){
    font-size: ${(props) => props.theme.fontxl};
}
@media (max-width:30em){
    font-size: ${(props) => props.theme.fontlg};
}

`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 2rem auto;
font-weight:400;
@media (max-width:64em){
    width:100%;
    text-align:center;
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width:40em){
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width:30em){
    font-size: ${(props) => props.theme.fontsm};
}

`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 2rem auto;
font-weight:400;
@media (max-width:64em){
    width:100%;
    text-align:center;
    font-size: ${(props) => props.theme.fontsm};
}
@media (max-width:40em){
    font-size: ${(props) => props.theme.fontsm};
}
@media (max-width:30em){
    font-size: ${(props) => props.theme.fontxs};
}
`

const ButtonContainer = styled.div`

width: 80%;
margin: 1rem auto;
display:flex;
align-self: flex-start;

@media (max-width:64em){
    width:100%;

    button{
        margin:0 auto;
    }
}
`


const About = () => {
    return(
        <Section id="about">
            <Container>
                <Box><Carousel/></Box>
                <Box>
                    <Title>
                        Welcome To The AEYKO Club.
                    </Title>
                    <SubText>
                    We hope to give holders the greatest rewards, incentives and privileges, by building solana's iconic NFT, relying on a powerful lottery to attract the attention of investors and developers
                    </SubText>
                    <SubTextLight>
                        
3133 high-quality founder stand-ins appear on the solana chain, each AEYKO is a unique work of art
                    </SubTextLight>
                    <ButtonContainer>
                   
                    <a href="https://discord.gg/v6pbxGDnsa" target="_blank" rel="noopener noreferrer">
                    <Button text="JOIN OUR DISCORD" link="#" />     
                    </a>
                    
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About