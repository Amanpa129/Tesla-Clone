import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Section = ({title , description , LeftBtnText ,rightBtnText , backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>

    <Fade bottom>
       <ItemText>
         <h1>{title}</h1>
         <p>{description}</p>
       </ItemText>
      </Fade>

        <Button>

        <Fade bottom>
      <ButtonGroup>
            <LeftButton>
              {LeftBtnText}
            </LeftButton>
          {rightBtnText && 
            <RightButton>
               {rightBtnText}
            </RightButton>
          }
      </ButtonGroup>
      </Fade>
    
        <DownArrow src ="/images/down-arrow.svg" /> 

      </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
 z-index: -1;
  width: 100vw;
  height: 100vh;  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${'' /* background-image: url('/images/model-s.jpg'); */}
  ${'' /* error part */}
  display:flex;
  flex-direction:column;
  ${'' /* for vertical alignment */}
  justify-content:space-between;
  ${'' /* for  horizontal alignment */}
  align-items: center; 
  background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
Text-align: center;
`

const ButtonGroup = styled.div`
  dispaly: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction :column;
  }
`
  
const LeftButton = styled.div`
background-color: rgba(23 , 26 , 32 , 0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items: center;
border-radius:100px;
opacity:0.6 5;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;

`
const DownArrow = styled.img`
${'' /* margin-top:20px; */}
height: 40px;  
overflow-x: hidden;
animation: animateDown infinite 1.5s;

`
const Button = styled.div`

`



