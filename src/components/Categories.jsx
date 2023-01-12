import React from 'react'
import styled from 'styled-components';
import {categories} from "../Data";
import CategoriesItems from './CategoriesItems';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItems item={item}/>
      ))}
    </Container>
  )
}

export default Categories