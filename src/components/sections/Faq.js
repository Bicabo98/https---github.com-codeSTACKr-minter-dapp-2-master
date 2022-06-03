import React, { useLayoutEffect } from'react'
import styled from 'styled-components'
import Accordion from '../Accrodion';
import { useRef } from'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: auto;
height:auto;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};
margin: 1rem auto;
width:fit-content;
@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
}
`;

const Container = styled.div`
width:75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content:center;

@media (max-width: 64em){
    width:80%;
}
@media (max-width: 48em){
    width:90%;
    flex-direction:column;

    &>*:last-child{
        &>*:first-child{
            margin-top:0;
        }
    }
}

`

const Box = styled.div`
width: 45%;

@media (max-width: 64em){
    width:90%;
    align-self:center;
}

`

const Faq = () => {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end:'bottom top',
            pin:true,
            pinSpacing:false,
            scrub:true,
            
        })

        return () => {
            ScrollTrigger.kill();
        };

    },[])
    
    return(
        <Section ref={ref} id="faq">
            <Title>
                faq
            </Title>
            <Container>
                <Box>
                    <Accordion title="What is MrAeykoNFT?">
                    This is a series of NFTs created by the great Solana founder Anatoly Yakovenko, we will be giving away a special NFT to Anatoly Yakovenko as a souvenir.
                    </Accordion>
                    <Accordion title="What is your relationship with Anatoly Yakovenko ?">
                    We are his fans and thank him for everything he does for Solana!
                    </Accordion>
                    <Accordion title="What is the minting price ?">
                    Public: 0.35 SOL <br/> Whitelist: 0.09 SOL.
                    </Accordion>
                </Box>
                <Box>
                <Accordion title="What is the total supply of MrAeykoNFT ?">
                MrAeykoNFT will have a total supply of 2422.
                    </Accordion>
                    <Accordion title="How do i earn $AEYKO ?">
                    You can earn $AEYKO by stake,airdrops and community events.
                    </Accordion>
                    <Accordion title="Why Solana?">
                    Very low fees and excellent potential.
                    </Accordion>


                </Box>
            </Container>
        </Section>
    )
}

export default Faq