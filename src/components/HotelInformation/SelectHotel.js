import Hotel from "../HotelInformation/Hotel";
import {
  RoomButton,
  Subtitle,
  HotelPage,
  HotelWrapper,
} from "./HotelPageStyle";

import { Redirect, useRouteMatch, useHistory } from "react-router-dom";

import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { RoomWrapper } from "./RoomInformation/RoomWrapper";
import Room from "./RoomInformation/Room";
import { toast } from "react-toastify";

export default function HotelSelection() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotelData, setHotelData] = useState([]);
  const history = useHistory();
  const api = useApi();

  useEffect(() => {
    const promisse = api.hotels.getHotelInfo();
    promisse.then((data) => {
      setHotelData(data.data);
    });
  }, []);

  function reservateRoom() {
    const promisse = api.reservation.postReservation(selectedRoom);
    promisse.then(() => {
      toast("Seu quarto foi reservado com sucesso!");
      history.push("/dashboard/activities");
    });
    promisse.catch(() => {
      toast("Deu ruim filhão");
    });
  }
  return (
    <>
      <HotelPage>
        <Subtitle>Primeiro, escolha seu hotel:</Subtitle>
        <HotelWrapper>
          {hotelData.map((hotel) => {
            return (
              <Hotel
                key={hotel.id}
                setSelectedRoom={setSelectedRoom}
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
                hotel={hotel}
              />
            );
          })}
        </HotelWrapper>
        {selectedHotel ? (
          <>
            <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
            <RoomWrapper>
              {hotelData
                .filter((h) => h.id === selectedHotel)[0]
                .rooms.map((room) => {
                  return (
                    <Room
                      key={room.id}
                      room={room}
                      selectedRoom={selectedRoom}
                      setSelectedRoom={setSelectedRoom}
                    />
                  );
                })}
            </RoomWrapper>
            {selectedRoom ? (
              <RoomButton onClick={reservateRoom}>RESERVAR QUARTO</RoomButton>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </HotelPage>
    </>
  );
}
