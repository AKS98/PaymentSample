import React from "react";
import reactDom from "react-dom";
import styled from "styled-components";


const Portal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return reactDom.createPortal(
    <Container>
     
      {props.children}</Container>,
    document.getElementById("portal")
  );
};

export default Portal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`;

