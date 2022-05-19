import React from'react'
import GIF from '../assets/Nfts/c1.png'
import styled from 'styled-components'

const VivdeoContainer = styled.div`
width:100%;
video{
    width:100%;
    height:auto;
}

@media (max-width:64em){
    min-width:40vh;
}
`
const CoverVideo = () => {
    return(
       <VivdeoContainer>
           <img src={GIF} />
        </VivdeoContainer>
    )
}

export default CoverVideo