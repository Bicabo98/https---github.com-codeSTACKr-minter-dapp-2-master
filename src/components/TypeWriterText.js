import React from'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from'./Button'


const Title = styled.h2`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1{
    color:orange;
}
.text-2{
    color:lightblue;
}
.text-3{
    color:lightgreen;
}

@media (max-width:70em){
    font-size: ${props => props.theme.fontxl};

}
@media (max-width:48em){
    align-self:center;
    text-align:center;
}
@media (max-width:40em){
    width:90%;
}




`;
const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform:capitalize;

color:${props => `rgba(${props.theme.bodyRgba},0.9)`};

font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width:40em){
    font-size: ${props => props.theme.fontmd};
    
}

@media (max-width:48em){
    align-self:center;
    text-align:center;
}


`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width:48em){
    align-self:center;
    text-align:center;

    butoon{
        margin:0 auto;
    }
}
`
const TyperWriterText = () => {
    return(
        <>
        <Title>
        Mr.Aeyko
            <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                }}
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">Tribute.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">to the founder of solana.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Anatoly Yakovenko!</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            />
           
        </Title>
         <SubTitle>We are fans of Anatoly Yakovenko, creating a community vision of great returns.<br /><br />Let's be solana's unique and iconic next project.</SubTitle>
         <ButtonContainer>        
         </ButtonContainer>
         
         </>
         
    )
}

export default TyperWriterText