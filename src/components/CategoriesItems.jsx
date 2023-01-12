import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   flex: 1;
   margin: 4px;
   height: 70vh;
   position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;

const Titel = styled.h1``;

const Button = styled.button`
  
`;

const CategoriesItems = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <InfoContainer>
            <Titel>{item.title}</Titel>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}

export default CategoriesItems