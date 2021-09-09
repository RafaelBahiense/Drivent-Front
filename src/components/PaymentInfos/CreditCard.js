import React from "react";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import styled from "styled-components";

import Title from "./Title";
import Subtitle from "./Subtitle";

export default function CreditCard({ isOnline, hasHotel, value }) {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  function handleInputFocus(e) {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setCardInfo({ ...cardInfo, [name]: value });
  }

  return (
    <>
      <Title text={"Ingresso escolhido"} />
      <Subtitle text={"Ingresso escolhido"} />
      <TicketResume>
        {isOnline
          ? "Online"
          : `Presencial + ${hasHotel ? "Com Hotel" : "Sem Hotel"}`}
        <span>{`R$ ${value}`}</span>
      </TicketResume>
      <Subtitle text={"Pagamento"} />
      <PaymentInfo>
        <CardContainer>
          <Cards
            cvc={cardInfo.cvc}
            expiry={cardInfo.expiry}
            focused={cardInfo.focus}
            name={cardInfo.name}
            number={cardInfo.number}
          />
        </CardContainer>
        <PaymentForm>
          <div>
            <PaymentInput
              type="tel"
              name="number"
              placeholder="Número do cartão"
              className="form-control" //
              pattern="[\d| ]{16,22}" //
              required //
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <p>E.g.: 49..., 51..., 36..., 37...</p>
          </div>
          <PaymentInput
            type="text"
            name="name"
            placeholder="Nome"
            className="form-control" //
            required //
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="row">
            <div className="expire">
              <PaymentInput
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valido Até"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="cvc">
              <PaymentInput
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </PaymentForm>
      </PaymentInfo>
    </>
  );
}

const CardContainer = styled.div`
  width: 290px;
`;

const PaymentInfo = styled.div`
  display: flex;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 290px;
  justify-content: space-between;
  p {
    color: rgba(0, 0, 0, 0.25);
    margin-top: 5px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    .expire {
      width: 60%;
    }
    .cvc {
      width: 35%;
    }
  }
`;

const PaymentInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 10px;
  font-size: 16px;
`;

const TicketResume = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  background-color: #ffeed2;

  span {
    margin-top: 5px;
    color: #898989;
  }
`;
