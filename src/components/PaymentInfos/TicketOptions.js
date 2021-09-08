import styled from "styled-components";

export default function TicketOptions({
  condition,
  setCondition,
  setConditionTo,
  name,
  price,
}) {
  let border;
  if (condition === undefined || !condition) {
    border = "1px solid #cecece";
  } else {
    border = "#FFEED2";
  }
  return (
    <TicketOptionsWrapper
      onClick={() => setCondition(setConditionTo)}
      selected={condition}
      border={border}
    >
      {name}
      <span>R$ {price}</span>
    </TicketOptionsWrapper>
  );
}

const TicketOptionsWrapper = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: ${(p) => p.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  background-color: ${(p) =>
    p.selected === undefined ? "" : p.selected ? "#FFEED2" : ""};

  span {
    color: #898989;
  }
`;
