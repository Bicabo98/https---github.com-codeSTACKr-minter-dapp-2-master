import React, { useRef,useLayoutEffect } from'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import { gsap } from "gsap";

const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;


width:100vw;

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
 }
`;
const SvgContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Container = styled.div`
width:100%;
height:200vh;
background-color:lightblue;
margin:0 auto;
display: flex;
justify-content:center;
position:relative;

@media (max-width: 64em){
    width:100%;
}
@media (max-width: 48em){
    width:100%;
}
`
const Items = styled.ul`
list-style:none;
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 48em){
    width:90%;
}

& > *:nth-of-type(2n + 1){
    justify-content: start; 
    @media (max-width: 48em){
    justify-content:center;
}

    div{
        border-radius:50px 0 50px 0;
        text-align:left;
    }

    @media (max-width: 48em){
        border-radius:0 50px 0 50px;
        text-align:left;
        p{
            border-radius:0 40px 0 40px;
        }
    }
}
    p{
        border-radius:40px 0 40px 0;
    }
}
&>*:nth-of-type(2n){
    justify-content: end;
    @media (max-width: 48em){
        justify-content:center;
    }
    div{
        border-radius:0 50px 0 50px;
        text-align:left;     
    }
    p{
        border-radius:0 40px 0 40px;
    }
}
`
const Item = styled.li`
width:100%;
height:100%;
display:flex;
@media (max-width: 48em){
    justify-content:flex-end !important;
}

`

const ItemContainer = styled.div`
width:80%;
height:fit-content;
padding:0.5rem;

@media (max-width: 48em){
   width:70%;
}
`

const Box = styled.p`
height:fit-content;
background-color:${props => props.theme.text};
color:${props => props.theme.text};
padding:1rem;
position:relative;
border:2px solid ${props => props.theme.body};
`
const SubTitle = styled.span`
display:block;
font-size:${props => props.theme.fontxl};
text-transform:capitalize;
color: ${props => props.theme.body};

@media (max-width: 40em){
    font-size: ${props => props.theme.fontlg};
    font-weight:600;
 }

`;
const Text = styled.span`
display:block;
font-size:${props => props.theme.fontmd};
text-transform:capitalize;
color: ${props => props.theme.body};

font-weright:400;
margin:0.5rem 0;

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxs};
  
 }
`;

const RoadMapItem = ({title, subtext,addToRef}) => {
    return(
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];


const addToRefs = (el) =>{
    if(el && !revealRefs.current.includes(el)){
        revealRefs.current.push(el);
    }
}

useLayoutEffect(() =>  {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el,index) => {

        t1.fromTo(
            el.childNodes[0],
        {
            y:'0'
        },{
            y:'-30%',

            scrollTrigger:{
                id: `section-${index + 1}`,
                trigger: el,
                start: 'top center+=200px',
                end:'bottom center',
                scrub:true,
                
            }
        }
       )
    }   )

    return() =>{

    };
},[])

    return(
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem addToRef={addToRefs} title="Phase 1 - Giveaway Day" subtext =
                     "After sold out 72 hours,a raffle to thank you for joining the community and trusting in our team 1 lucky ID token will get 200 Solana ...5 lucky ID token will get 10 Solana ...30 lucky ID token will get 3 Solana ...100 lucky ID token will get 1 Solana"/>
                    <RoadMapItem addToRef={addToRefs} title="Phase 2 - Sweep The Floor" subtext = "We have seen that the floor price has been falling due to the spread of paper hands and panic after many projects are sold out , so we will conduct sweep the floor activities for 7 weeks.Randomly acquire floors every week until we are satisfied with the floor price"/>
                    <RoadMapItem addToRef={addToRefs} title="Phase 3 - Raffle Week" subtext = "We will drop 50 Solana every week for 7 weeks"/>
                    <RoadMapItem addToRef={addToRefs} title="Phase 4 - Economic system" subtext = "We're developing a platform for staking our NFTs and tokens to receive incentives.We will build a huge fund mall, and everyone can receive $aeyko every day after staking AeykoNFT to the official website."/>
                    <RoadMapItem addToRef={addToRefs} title="Phase 5 - Community DAO" subtext = "We will listen to the valuable opinions of the community!"/>
                    <RoadMapItem addToRef={addToRefs} title="Phase 6 - Project support" subtext = "Help other new projects get better support!"/>
           
                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap