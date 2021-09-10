import styled from "styled-components";
import ConfirmButton from "./ConfirmButton";

export default function ResumeCheckout({ value, reserveTicket }) {
  return (
    <>
      <Description>
        Fechado! O total ficou em <span>R$ {value}.</span> Agora é só confirmar:
      </Description>
      <ConfirmButton text={"RESERVAR INGRESSO"} onClick={reserveTicket} />
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
