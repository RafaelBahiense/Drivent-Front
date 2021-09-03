import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useState } from "react";
export default function Room({ room }) {
  const [disabler, setDisabler] = useState(false);
  return (
    <RoomCard disabler={disabler} onClick={() => setDisabler(true)}>
      <RoomNumber>{room.number}</RoomNumber>
      <IconBox>
        {[...Array(room.capacity)].map(() => {
          return <BsPersonFill className="icon" />;
        })}
      </IconBox>
    </RoomCard>
  );
}

const RoomCard = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 17px;
  margin-bottom: 8px;
  background-color: white;
  filter: ${(props) => (props.disabler ? "brightness(0.9)" : "brightness(1)")};
  opacity: ${(props) => (props.disabler ? "55%" : "1")};
  .icon {
    font-size: 21px;
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
`;
const RoomNumber = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 45px;
  margin-left: 16px;
  color: #454545;
`;
