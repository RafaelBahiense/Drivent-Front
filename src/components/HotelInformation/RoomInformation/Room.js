import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useState } from "react";

export default function Room({ room, selectedRoom, setSelectedRoom }) {
  const [disabler, setDisabler] = useState(!room.availableBeds);
  const checker = [selectedRoom, room];

  return (
    <RoomCard
      checker={checker}
      disabled={disabler}
      onClick={() => {
        setSelectedRoom(room.id);
      }}
    >
      <RoomNumber>{room.number}</RoomNumber>
      <IconBox>
        {selectedRoom === room.id ? (
          <>
            {[...Array(Math.abs(room.availableBeds - 1))].map(() => {
              return <BsPerson key={Math.random()} className="icon" />;
            })}

            <BsPersonFill
              color="#FF4791"
              key={Math.random()}
              className="icon"
            />
            {[...Array(room.capacity - room.availableBeds)].map(() => {
              return <BsPersonFill key={Math.random()} className="icon" />;
            })}
          </>
        ) : (
          <>
            {[...Array(Math.abs(room.availableBeds))].map(() => {
              return <BsPerson key={Math.random()} className="icon" />;
            })}
            {[...Array(room.capacity - room.availableBeds)].map(() => {
              return <BsPersonFill key={Math.random()} className="icon" />;
            })}
          </>
        )}
      </IconBox>
    </RoomCard>
  );
}

const RoomCard = styled.button`
  cursor: pointer;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 17px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.checker[0] === props.checker[1].id ? "#FFEED2" : "white"};
  filter: ${(props) => (props.disabled ? "brightness(0.8)" : "brightness(1)")};
  opacity: ${(props) => (props.disabled ? "55%" : "1")};
  .icon {
    font-size: 21px;
  }
  @media (max-width: 1056px) {
    width: 160px;
    margin-right: 16px;
  }
  @media (max-width: 918px) {
    width: 145px;
    margin-right: 15px;
  }
  @media (max-width: 858px) {
    width: 150.5px;
    margin-right: 15px;
  }
  @media (max-width: 700px) {
    width: 123px;
    margin-right: 13px;
  }
  @media (max-width: 600px) {
    width: 150px;
    margin-right: 16px;
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
  @media (max-width: 858px) {
    margin-right: 4px;
  }
`;
const RoomNumber = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 45px;
  margin-left: 16px;
  color: #454545;
  @media (max-width: 858px) {
    margin-left: 10px;
  }
`;
