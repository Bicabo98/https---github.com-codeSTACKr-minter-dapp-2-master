import React from'react'
import styled from 'styled-components'

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import ConfettiComponent from '../Confetti';


import png1 from '../../assets/Nfts/1.png';
import png2 from '../../assets/Nfts/2.png';
import png3 from '../../assets/Nfts/3.png';
import png4 from '../../assets/Nfts/4.png';
import png5 from '../../assets/Nfts/5.png';
import png6 from '../../assets/Nfts/6.png';



const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
`
const Title = styled.h2`
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

const Container = styled.div`
width:75%;
margin:2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap:wrap;

@media (max-width: 64em){
    width:80%;
}

@media (max-width: 48em){
    width:90%;
    justify-content:center;
}

`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: $(props => props.theme.body);
margin: 2rem 1rem;
position: relative;
z-index:5;
backdrop-filter:blur(4px);

border: 2px solid ${props => props.theme.body};
border-radius: 20px;


&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}


@media (max-width: 30em){
    width:70vw;
}
`

const ImageContainer = styled.div`
width: 80%;
margin:0 auto;


padding:auto;

border-radius:20px;
cursor:pointer;

img{
    width:100%;
    height:auto;
    transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.body};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.bodyRgba},0.9)`};
margin-top: 1rem;
`

const MemberCopmonent = ({img,name="",position=" "}) => {
    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

const Team = () => {
    return(
        <Section id="team">
              <Title>Team</Title>
              <Container>
                  <MemberCopmonent img={png1} name="Bieber" position="Founder"/>
                  <MemberCopmonent img={png5} name="Rival" position="Founder"/>
                  <MemberCopmonent img={png2} name="Akiko" position="Artiest" />
                  <MemberCopmonent img={png3} name="Bboi" position="community management"/>
                  <MemberCopmonent img={png4} name="Fish" position="Dev"/>

              </Container>
        </Section>
      
    )
}

export default Team