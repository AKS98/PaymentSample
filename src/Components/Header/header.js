import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle, BiDollar, BiDockTop } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";

const Header = () => {
  return (
    <MainContainer bgVal={"#000"}>
      <div className="container flexContainer">
        <ItemContainer>
          <h3>Grave Sites Managment</h3>
        </ItemContainer>
        <ItemContainer>
          <Items className="selectOptions">
            <CgMicrosoft className="react-icons headerIcons" />
            Maintain
          </Items>
          <Items className="selectOptions">
            <BiDollar className="react-icons headerIcons" />
            Payments
          </Items>
          <Items className="selectOptions">
            <BiDockTop className="react-icons headerIcons" />
            Reports
          </Items>
        </ItemContainer>
        <ItemContainer>
          <Items>
            <BsSearch className="react-icons" />
          </Items>
          <Items>
            <AiOutlineSetting className="react-icons" />
          </Items>
          <Items>
            <BiHelpCircle className="react-icons" />
          </Items>
          <Items>
            <UserImage />
            <UserName>John Snow</UserName>
          </Items>
        </ItemContainer>
      </div>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  background-color: ${(props) => (props?.bgVal ? props.bgVal : "#fff")};
  color: #fff;
  .flexContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 8vh;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  gap: 0.7rem;
  .react-icons {
    font-size: 1.3rem;
  }
  .headerIcons {
    margin-right: 0.2rem;
  }
  .selectOptions {
    cursor: pointer;
    &:hover {
      background-color: #ccc;
      opacity: 0.5;
      border-radius: 0.8rem;
    }
  }
`;
const Items = styled.div`
  display: flex;
  padding: 0.5rem 0.8rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;
const UserImage = styled.div`
  padding: 1.3rem 1.3rem;
  position: relative;
  background-color: green;
  border-radius: 50%;
  margin-right: 0.5rem;
  &:before {
    position: absolute;
    content: "JS";
    left: 0.8rem;
    top:0.8rem;
  }
`;
const UserName = styled.div`
  font-size: 1rem;
`;
