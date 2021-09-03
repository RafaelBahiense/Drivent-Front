import { useState } from "react";
import styled from "styled-components";
import hotel from "../../assets/images/hotel.jpg";

export default function Hotel({ selected, setSelected, id }) {
  const checker = [selected, id];
  return (
    <HotelBox onClick={() => setSelected(id)} checker={checker}>
      <HotelImage src={hotel} alt="an hotel" />
      <HotelName> Driven Resort</HotelName>
      <RoomType>Tipos de acomodação:</RoomType>
      <RoomInfo>Single e Double</RoomInfo>
      <RoomType>Vagas disponíveis:</RoomType>
      <RoomInfo>103</RoomInfo>
    </HotelBox>
  );
}

const HotelBox = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.checker[0] === props.checker[1] ? "#FFEED2" : "#F1F1F1"};
  margin-right: 19px;
  padding-left: 14px;
`;

const HotelImage = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
  margin: 16px 14px 10px 0px;
`;
const HotelName = styled.p`
  font-size: 20px;
  color: #343434;
  margin-bottom: 10px;
`;
const RoomType = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #3c3c3c;
  margin-bottom: 2px;
`;

const RoomInfo = styled.p`
  font-size: 12px;
  color: #3c3c3c;
  margin-bottom: 14px;
`;
