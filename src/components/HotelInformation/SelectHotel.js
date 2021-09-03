import styled from "styled-components";
import Hotel from "../HotelInformation/Hotel";

import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { RoomWrapper } from "./RoomInformation/RoomWrapper";
import Room from "./RoomInformation/Room";
import { toast } from "react-toastify";

export default function HotelSelection() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotelData, setHotelData] = useState([]);

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
    });
    promisse.catch(() => {
      toast("Houve um erro ao reservar o seu quarto!");
    });
  }
  return (
    <>
      <HotelPage>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
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
        {selectedHotel && (
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
            {selectedRoom && (
              <ConfirmateRoom onClick={reservateRoom}>
                RESERVAR QUARTO
              </ConfirmateRoom>
            )}
          </>
        )}
      </HotelPage>
    </>
  );
}

const ConfirmateRoom = styled.button`
  margin-top: 46px;
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 400;
  margin-bottom: 18px;
`;

const HotelPage = styled.div`
  font-family: "Roboto", sans-serif;
`;

const HotelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 52px;
`;
