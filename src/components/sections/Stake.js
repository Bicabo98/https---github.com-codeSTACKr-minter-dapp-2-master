import React from'react'
import styled from 'styled-components'
import StakeWrite from '../StakeWriter';
import BildBox from '../../assets/bilnd box.png'


const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};


position: relative;
`

const Title = styled.h2`
padding:1rem;
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
margin:  auto;

width:fit-content;
@media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
}
`;

const Box = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
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
const Title1 = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 100%;
color: ${(props) => props.theme.body};
align-self: flex-start;
margin: 2rem auto;

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
width: 100%;
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
width: 100%;
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
const ImageContainer = styled.div`
width: 80%;
margin:5rem auto;
background-color:${props => props.theme.body};
border: 1px solid ${props => props.theme.body};


border-radius:2px;
cursor:pointer;
img{
    width:100%;
    height:auto;
    transition: all 0.3s ease;
}

@media (max-width: 64em){
    width:80%;
}
@media (max-width: 50em){
    width:80%;
}
@media (max-width: 40em){
    width:80%;
}
`



const Stake = () =>{
    return(
        <Section id="stake">
            <Title>
                Stake
            </Title>
            <Container>
                <Box> 
                    <Title1>
                        How does our staking system work?
                    </Title1>
                    <SubText>
                    Let's play a fun game,stake your MrAeykoNFT, get tokens, use tokens to exchange for Solana blind box or iphone, ipad for free.
                    </SubText>
                    <SubTextLight>
                        
After our calculation, after 4 months of stake, you can use the token points to exchange for an iphone13
                    </SubTextLight>
                </Box>
                <Box>
                    <ImageContainer>
                    <img src = {BildBox} alt="name" />
                    </ImageContainer>
                   
                </Box>
            </Container>
            
        </Section>
    )
    
}

export default Stake