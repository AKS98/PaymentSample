import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer bgVal={"#ccc"}>
      <div className="container flexContainer">
        <ItemContainer>
          <h5>2023 Company</h5>
        </ItemContainer>
        <ItemContainer>
          <Items className="selectOptions">About</Items>
          <Items className="selectOptions">Terms of Use</Items>
          <Items className="selectOptions">Contact</Items>
        </ItemContainer>
      </div>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => (props?.bgVal ? props.bgVal : "#fff")};
  color: #fff;
  .flexContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .react-icons {
    font-size: 1.3rem;
  }
  .headerIcons {
    margin-right: 0.2rem;
  }
  .selectOptions {
    cursor: pointer;
  }
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
