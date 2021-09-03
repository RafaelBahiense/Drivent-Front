import styled from "styled-components";

export default function TicketOptions({
  condition,
  setCondition,
  setConditionTo,
  name,
  price,
}) {
  return (
    <TicketOptionsWrapper
      onClick={() => setCondition(setConditionTo)}
      selected={condition !== undefined ? condition : undefined}
    >
      {name}
      <span>R$ {price}</span>
    </TicketOptionsWrapper>
  );
}

const TicketOptionsWrapper = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(p) =>
    p.selected === undefined ? "#FFF" : p.selected ? "#FFEED2" : "#FFF"};

  span {
    color: #898989;
  }
`;
