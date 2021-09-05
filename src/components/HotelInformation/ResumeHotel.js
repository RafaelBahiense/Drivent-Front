import Hotel from "../HotelInformation/Hotel";
import {
  RoomButton,
  Subtitle,
  HotelPage,
  HotelWrapper,
} from "./HotelPageStyle";

import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { RoomWrapper } from "./RoomInformation/RoomWrapper";
import Room from "./RoomInformation/Room";
import { toast } from "react-toastify";

export default function ResumeHotel() {
  return (
    <>
      <HotelPage>
        <Subtitle>Você já escolheu seu quarto:</Subtitle>
        <HotelWrapper>
          <Hotel
            key={1}
            setSelectedRoom={1}
            selectedHotel={1}
            setSelectedHotel={1}
            hotel={1}
          />
        </HotelWrapper>
        <RoomButton>TROCAR DE QUARTO</RoomButton>
      </HotelPage>
    </>
  );
}
