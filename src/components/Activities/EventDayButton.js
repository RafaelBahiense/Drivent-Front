import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function EventDayButton({
  eventDay,
  setSelectedDay,
  selectedDay,
}) {
  const checker = [eventDay.id, selectedDay];
  return (
    <Button checker={checker} onClick={() => setSelectedDay(eventDay.id)}>
      {dayjs(eventDay.date).locale("pt-br").format("dddd[,] DD/MM")}
    </Button>
  );
}

const Button = styled.button`
  width: 131px;
  height: 37px;
  background: ${(props) =>
    props.checker[0] === props.checker[1] ? "#FFD37D" : "#e0e0e0"};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin: 15px 17px 0 0;
`;
