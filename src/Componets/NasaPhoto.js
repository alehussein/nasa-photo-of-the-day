import React from "react";
import styled from "styled-components";

const StyledNasaPhoto = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem;
width: 50%;
justify-content: center;
align-items: center;
`
const Names = styled.div`
display: flex;
flex-direction: column;
order: 1;
flex: 1;
width: 30%;
padding: 2rem;
align-items: center;
`

const Image =styled.img`
order: 2;
flex: 1;
width: 30%;
border-radius: 2rem;
box-shadow: 0 0 20px rgba(0, 0, 0, 1);
`
const Expla = styled.p`
order: 3;
flex: 2;
flex-basis: 100%;
text-align: justify;
color: ${pr => pr.theme.primaryColor};
`
const Title =styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

`
const SectionTitle = styled.section`
  padding: 2em;
  background: papayawhip;
  border-radius: 2rem;
`
const SectionDate = styled.section`
  padding: 0,5rem;
  background: papayawhip;
  border-radius: 2rem;
  width: 20%;
  margin-top: 1rem;
  
`

const NasaPhoto = (props) => {
    return (
      <StyledNasaPhoto className="nasaPhoto">
        
        <Image src={props.photo.hdurl} />
        <Names className="name">
          <SectionTitle>
        <Title>{props.photo.title}</Title>
          </SectionTitle>
          <SectionDate>
        <p className="date">{props.photo.date}</p>
          </SectionDate>
        <p className="copy">{props.photo.copyright}</p>
        </Names>
        
        <Expla className="explanation">{props.photo.explanation}</Expla>
      </StyledNasaPhoto>
    )
  };


  export default NasaPhoto;