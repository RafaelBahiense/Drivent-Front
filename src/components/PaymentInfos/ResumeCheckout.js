import styled from "styled-components";

export default function ResumeCheckout({ value, reserveTicket }) {
  return (
    <>
      <Description>
        Fechado! O total ficou em <span>R$ {value}.</span> Agora é só confirmar:
      </Description>
      <ReserveButton onClick={reserveTicket}>RESERVAR INGRESSO</ReserveButton>
    </>
  );
}

const Description = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-family: "Roboto", sans-serif;
  margin-top: 44px;
  span {
    font-weight: bold;
  }
`;

const ReserveButton = styled.div`
  width: 162px;
  height: 37px;
  margin-top: 17px;
  border-radius: 4px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;
