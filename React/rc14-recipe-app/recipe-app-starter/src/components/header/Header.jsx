import React from "react";
import "./Header.style";
import { HeaderContainer } from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer>
        <FoodInput type="text" placeholder="Search"></FoodInput>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
