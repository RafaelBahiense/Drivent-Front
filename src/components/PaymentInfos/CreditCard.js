import React from "react";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import styled from "styled-components";

import Title from "./Title";
import Subtitle from "./Subtitle";
import ConfirmButton from "./ConfirmButton";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";

export default function CreditCard({
  isOnline,
  hasHotel,
  value,
  reservationData,
  setReservationData,
}) {
  const { payment } = useApi();
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

  function ConfirmPayment() {
    if (!pattern.number.test(cardInfo.number) || cardInfo.number.length > 16) {
      toast("Número do cartão inválido");
    }
    if (!pattern.name.test(cardInfo.name)) {
      toast("Nome inválido");
    }
    if (!pattern.expiry.test(cardInfo.expiry)) {
      toast("Validade incorreta");
    }
    if (!pattern.cvc.test(cardInfo.cvc) || cardInfo.cvc.length > 3) {
      toast("CVC inválido");
    }

    payment.postPayment(value, reservationData.id).then((res) => {
      setReservationData({
        ...reservationData,
        payment: res.data,
        paymentId: res.data.id,
      });
    });
  }

  const pattern = {
    number: new RegExp("[0-9]{16}"),
    name: new RegExp("^[a-zA-Z ]*$"),
    expiry: new RegExp("[0-9][0-9]/[0-9][0-9]"),
    cvc: new RegExp("[0-9]{3}"),
  };

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
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <p>E.g.: 49..., 51..., 36..., 37...</p>
          </div>
          <PaymentInput
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="row">
            <div className="expire">
              <PaymentInput
                type="tel"
                name="expiry"
                placeholder="Valido Até"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="cvc">
              <PaymentInput
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </PaymentForm>
      </PaymentInfo>
      <ConfirmButton text={"FINALIZAR PAGAMENTO"} onClick={ConfirmPayment} />
    </>
  );
}

const CardContainer = styled.div`
  width: 290px;
`;

const PaymentInfo = styled.div`
  display: flex;
  margin-bottom: 40px;
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
