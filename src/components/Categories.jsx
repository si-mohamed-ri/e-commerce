import React from "react";
import styled from "styled-components";
import { categories } from "../Data";
import CategoriesItems from "./CategoriesItems";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import "./Style/Styling.scss";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  const [show, setSow] = useState(false);
  const [categorie, setCategorie] = useState('');  

  const hendlefetchCategorie = async => {
    
  };

  return (
    <>
      <div className="fletter" onClick={() => setSow(!show)}>
        <h1>Categories</h1>
        {show ? (
          <ExpandLess className="IconMore" onClick={() => setSow(!show)} />
        ) : (
          <ExpandMore className="IconMore" onClick={() => setSow(!show)} />
        )}
      </div>
      {show ? (
        <div className="CategorieList">
          <ul className="ListItems">
            {categories.map((c) => (
              <li className="Items" key={c.id} onClick={hendlefetchCategorie}>
                {c.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Container>
        {categories.map((item) => (
          <CategoriesItems item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
