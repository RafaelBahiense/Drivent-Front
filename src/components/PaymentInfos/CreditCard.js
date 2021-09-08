import styled from "styled-components";

import Title from "./Title";

export default function CreditCard({ isOnline, hasHotel, value }) {
  return (
    <>
      <Title text={"Ingresso escolhido"} />
      <TicketResume>
        {isOnline
          ? "Online"
          : "Presencial" + hasHotel
            ? " + Com Hotel"
            : " + Com Hotel"}
        <span>{`R$ ${value}`}</span>
      </TicketResume>
    </>
  );
}

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
    color: #898989;
  }
`;
