import React ,{useEffect}from 'react'
import styled from "styled-components";
import './Section.css'
import Fade from 'react-reveal/Fade';
import AOS from "aos";
import "aos/dist/aos.css";
function Section({title,description,backgroundImage,leftBtnText,rightBtnText}) {
    useEffect(() => {
        AOS.init({
          duration : 1500
        })
      });
    return (
        <div>
            <Wrap  bgImage={backgroundImage} id='wrap'  data-aos="fade-bottom">
                <Fade>
                   <ItemText>
                     <h1>{title} </h1>
                     <p>{description}</p>
                   </ItemText>
                </Fade>
            
               <Buttons id='buttons'>
                   <Fade bottom>
                     <ButtonGroup>
                       <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText &&
                       <RightButton>{rightBtnText}</RightButton>
                     }
                    
                   </ButtonGroup>
                   </Fade>
                 
                   <DownArrow src='/images/down-arrow.svg'/>
               </Buttons>
           

           
            </Wrap>
        </div>
    )
}

export default Section
const Wrap=styled.div`
  
   width:100vw;
   height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:space-between:
   align-items:center;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   object-fit:contain;
   background-image:${props=>`url('/images/${props.bgImage}')`};
   @media(max-width:768px){
     height:75vh;
}
 

   
`
const ItemText=styled.div`
   padding-top:15vh;
   text-align:center;
`
const Buttons=styled.div`

       
`
const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:5px;
    cursor:pointer;
    @media(max-width:768px){
        flex-direction:column;
    }

    
`
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:250px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    margin:8px;
   
`
const RightButton=styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;

  
`
const DownArrow=styled.img`
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;
`