import React, { useState } from "react";
import styled from "styled-components";
import { PaymentJson } from "./paymentStatic";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Portal from "../Portal/Portal";

const PaymentBody = () => {
  const [paymentState, setPaymentState] = useState([...PaymentJson]);
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalVal, setPortalVal] = useState({});
  const handleEdit = (idVal) => {
    setPortalOpen(true);
    setPortalVal({ val: paymentState[idVal - 1], type: "edit" });
  };
  const handleDelete = (idVal) => {
    setPortalOpen(true);
    setPortalVal({ val: paymentState[idVal - 1], type: "delete" });
  };
  const handleClosePortal = () => {
    setPortalOpen(false);
    setPortalVal({});
  };
  const renderValues = paymentState?.map((item) => {
    return (
      <PaymentContainer id={item?.id}>
        <input type="checkbox" />
        <PaymentName>{item?.nameVal}</PaymentName>
        <PaymentStatus>
          <PaymentSpan bgVal={item?.status === "active" ? "green" : "red"}>
            {item?.status.toUpperCase()}
          </PaymentSpan>
        </PaymentStatus>
        <ActionsContainer>
          <FiEdit2
            onClick={() => handleEdit(item?.id)}
            className="react-icons"
          />
          <AiFillDelete
            onClick={() => {
              handleDelete(item?.id);
            }}
            className="react-icons"
          />
        </ActionsContainer>
      </PaymentContainer>
    );
  });
  return (
    <MainContainer bgVal={"#fff"}>
      <div className="container flexContainer">
        <PaymentActions>
          <h1>Payment Type</h1>
          <PayAct>
            <SearchBar type="text" placeholder="Search By Name" />
            <NewPay className="btn btn-primary">+Payment Type</NewPay>
          </PayAct>
        </PaymentActions>
        <PaymentContainer>
          <input type="checkbox" />
          <PaymentName>Name</PaymentName>
          <PaymentStatus>
            <PaymentSpan>Status</PaymentSpan>
          </PaymentStatus>
        </PaymentContainer>
        {renderValues}
      </div>
      <Portal isOpen={portalOpen}>
        <PortalBackground />
        <PortalContainer>
          <h2>{portalVal?.type}</h2>
          {portalVal?.type === "edit" ? (
            <ConfirmActions>
              <h4>
                Do you want to edit the {portalVal?.val?.nameVal} document?
              </h4>
              <ActionsContainer className="portalActions">
                <div className="btn" onClick={handleClosePortal}>
                  YES
                </div>
                <div className="btn" onClick={handleClosePortal}>
                  No
                </div>
              </ActionsContainer>
            </ConfirmActions>
          ) : (
            <ConfirmActions>
              <h4>
                Do you want to Delete the {portalVal?.val?.nameVal} document?
              </h4>
              <ActionsContainer className="portalActions">
                <div className="btn" onClick={handleClosePortal}>
                  YES
                </div>
                <div className="btn" onClick={handleClosePortal}>
                  No
                </div>
              </ActionsContainer>
            </ConfirmActions>
          )}
        </PortalContainer>
      </Portal>
    </MainContainer>
  );
};

export default PaymentBody;

const MainContainer = styled.div`
  padding: 3rem 0;
  background-color: ${(props) => (props?.bgVal ? props.bgVal : "#fff")};
  color: #000;
  height: calc(100vh - 16 vh);
  overflow: auto;
  position: relative;
  .flexContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
const PaymentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  input {
    cursor: pointer;
    flex: 0 0 2rem;
    width: 1rem;
    height: 1rem;
  }
  .react-icons {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
const PaymentName = styled.div`
  font-size: 1.5rem;
  flex: 0 1 40%;
`;
const PaymentStatus = styled.div`
  font-size: 1.5rem;
  flex: 1 1 5rem;
  // span {
  //   text-align: center;
  //   display: inline-block;
  //   border-radius: 0.6rem;
  //   width: 8rem;
  //   background-color: ${(props) => (props.bgVal ? props.bgVal : "#ccc")};
  // }
`;
const PaymentSpan = styled.span`
  text-align: center;
  display: inline-block;
  border-radius: 0.6rem;
  width: 8rem;
  background-color: ${(props) => (props.bgVal ? props.bgVal : "")};
`;
const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 4rem;
  gap: 0.7rem;
`;

const PaymentActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h1 {
    color: green;
    font-weight: 600;
  }
`;
const PayAct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const SearchBar = styled.input`
  border: solid 1px black;
  font-size: 1.3rem;
  border-radius: 0.6rem;
  padding: 0.7rem 0.5rem;
`;
const NewPay = styled.div``;
const PortalContainer = styled.div`
  position: absolute;
  width: 50rem;
  height: 40vh;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  background-color: #ccc;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 1rem;
`;
const PortalBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #00000080;
`;
const ConfirmActions = styled.div`
  margin: 2rem 0;
  padding: 1rem 1rem;
  .portalActions {
    margin-top: 2rem;
  }
`;
