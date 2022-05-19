import React from'react'
import styled from'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'

const Section = styled.section`
min-height: 60vh;
width:100vw;
height:60vh;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display:flex;


flex-direction:column;
`
const Container = styled.div`
width:75%;
margin:2rem auto;
display:flex;
justify-content: space-between;
align-items: center;

border-bottom:1px solid ${(props) => props.theme.text};

@media (max-width: 48em){
width:90%;
}

h1{
    font-size:${props => props.theme.fontxxxl};
}

`
const Left = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 48em){
    width:100%;
}

`
const IconList = styled.div`
display:flex;
align-items:center;
margin:1rem auto;

&>*{
    padding-right:0.5rem;
    transform:all 0.2s ease;

    &:hover{
        transform:scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style:none;
width:50%;
display:grid;
gird-template-columns:repeat(2,1fr);
grid-template-rows:repeat(3,1fr);
grid-gap:1rem;

@media (max-width: 48em){
    width:none;
}
`
const Item = styled.li`
width:fit-content;
cursor:pointer;

&::after{
    content:' ';
    display: block;
    width: 0%;
    height: 2px;
    background:${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const Bottom = styled.div`
width:75%;
margin:0 auto;
display:flex;
justify-content:space-between;
align-items:center;

a{
    text-decoration:underline;
}

@media (max-width: 48em){
flex-direction:column;
width:100%;

span{
    margin-bottom:1rem;
}
}
`


const Footer = () => {

    const crollTo = (id) => {
        let element = document.getElementById(id);
    
        element.scrollIntoView({
            behavior:'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    return(
        <Section>
            
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="http://twitter.com" target='_blank'
                        rel="noopener"
                        >
                            <Twitter />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                <Item onClick={() => crollTo('home')}>Home</Item>
                <Item onClick={() => crollTo('about')}>About</Item>
                <Item onClick={() => crollTo('roadmap')}>Roadmap</Item>
                <Item onClick={() => crollTo('showcase')}>Showcase</Item>
                <Item onClick={() => crollTo('team')}>Team</Item>
                <Item onClick={() => crollTo('faq')}>Faq</Item>
                <Item onClick={() => crollTo('home')}>Stake</Item>
                <Item onClick={() => crollTo('home')}>Mall</Item>
                </MenuItems>
            </Container>
 
        </Section>
    )
}

export default Footer