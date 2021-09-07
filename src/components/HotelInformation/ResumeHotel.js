import styled from "styled-components";
import Hotel from "../HotelInformation/Hotel";
import {
  RoomButton,
  Subtitle,
  HotelPage,
  HotelWrapper,
} from "./HotelPageStyle";

export default function ResumeHotel({ userStatus }) {
  return (
    <>
      <HotelPage>
        <Subtitle>Você já escolheu seu quarto:</Subtitle>
        <HotelWrapper>
          <Hotel
            key={userStatus?.room?.hotel?.id}
            hotel={userStatus?.room?.hotel}
            room={userStatus?.room}
          />
        </HotelWrapper>
        <RoomButton>TROCAR DE QUARTO</RoomButton>
      </HotelPage>
    </>
  );
}
