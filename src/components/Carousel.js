 import React from'react'
import styled from 'styled-components'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination,Navigation,Autoplay,EffectCards} from "swiper"

import img1 from '../assets/Nfts/bighead.svg';
import img2 from '../assets/Nfts/bighead-1.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead-3.svg';
import img5 from '../assets/Nfts/bighead-4.svg';
import img6 from '../assets/Nfts/bighead-5.svg';
import img7 from '../assets/Nfts/bighead-6.svg';
import img8 from '../assets/Nfts/bighead-7.svg';
import img9 from '../assets/Nfts/bighead-8.svg';
import img10 from '../assets/Nfts/bighead-9.svg';


import png1 from '../assets/Nfts/1.png';
import png2 from '../assets/Nfts/2.png';
import png3 from '../assets/Nfts/3.png';
import png4 from '../assets/Nfts/4.png';
import png5 from '../assets/Nfts/5.png';
import png6 from '../assets/Nfts/6.png';
import png7 from '../assets/Nfts/7.png';
import png8 from '../assets/Nfts/8.png';

import Arrow from '../assets/Arrow.svg';

 const Container = styled.div`
 width: 25vw;
 height: 70vh;

 @media (max-width:70em){
    height:60vh;
 }

 @media (max-width:64em){
    height:50vh;
     width:30vw;
 }

 @media (max-width:48em){
     height:50vh;
     width:40vw;
 }

 @media (max-width:30em){
    height:45vh;
    width:60vw;
}

 .swiper{
     width: 100%;
     height: 100%;
 }

 .swiper-slide{
     background-color: ${props => props.theme.carouselColor}; 
     border-radius:20px;

     display:flex;
     justify-content:center;
     align-items:center;

     img{
         display:block;
         width:100%;
         height:auto;
         object-fit:cover;
     }
 }
 
 .swiper-button-next{
     color: ${props => props.theme.text};
     right:0;
     width:4rem;
     top:60%;

     background-image:url(${Arrow});
     background-position:center;
     background-size:cover;

     &:after{
         display:none;
     }

     @media (max-midth:64em){
        width:3rem;
     }

     @media (max-midth:30em){
        width:2rem;
     }

 }
.swiper-button-prev{
    color: ${props => props.theme.text};
    left:0;
    width:4rem;
    top:60%;
    transform:rotate(180deg);

    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }
}
`
const Carousel = () => {
    return(
        <Container>
            <Swiper
            autoplay={{
                delay:2000,
                disableOnInteraction:false,
            }}
            pagination={{
                type:'fraction',
            }}
            scrollbar={{
                draggable:true
            }}
           
            modules={[EffectCards,Pagination,Navigation,Autoplay]}
            navigation={true}
            effect={"cards"}
            grabCursor={true}
            className="mySwiper"
            >
                <SwiperSlide> <img src={png1} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png2} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png3} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png4} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png5} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png6} alt="The Weirdos" /> </SwiperSlide>
                <SwiperSlide><img src={png7} alt="The Weirdos" /> </SwiperSlide> 
                <SwiperSlide><img src={png8} alt="The Weirdos" /> </SwiperSlide>
     
     
            </Swiper>
        </Container>
    )
}

export default Carousel