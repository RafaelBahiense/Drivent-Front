import styled from "styled-components";
import { HotelWrapper } from "../HotelInformation/HotelWrapper";
import Hotel from "../HotelInformation/Hotel";
import { RoomWrapper } from "./RoomInformation/RoomWrapper";
import { useState } from "react";
import Room from "./RoomInformation/Room";

export default function HotelSelection() {
  const [selected, setSelected] = useState(null);
  const hotels = [
    {
      availableBeds: 36,
      id: 1,
      name: "Driven Resort",
      image: "https://i.ibb.co/bJC8Xcc/Driven-Resort.png",
      rooms: [
        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },

        {
          id: 1,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 2,
          number: "102",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 3,
          number: "103",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 4,
          number: "104",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 5,
          number: "201",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 6,
          number: "202",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 7,
          number: "203",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 8,
          number: "204",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 9,
          number: "301",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 10,
          number: "302",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 11,
          number: "303",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 12,
          number: "304",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 13,
          number: "401",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 14,
          number: "402",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 15,
          number: "403",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 16,
          number: "404",
          capacity: 3,
          availableBeds: 3,
        },
      ],
    },
    {
      availableBeds: 36,
      id: 2,
      name: "Driven Palace",
      image: "https://i.ibb.co/JQ411jN/Driven-Palace.png",
      rooms: [
        {
          id: 17,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 18,
          number: "102",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 19,
          number: "103",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 20,
          number: "104",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 21,
          number: "201",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 22,
          number: "202",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 23,
          number: "203",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 24,
          number: "204",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 25,
          number: "301",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 26,
          number: "302",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 27,
          number: "303",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 28,
          number: "304",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 29,
          number: "401",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 30,
          number: "402",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 31,
          number: "403",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 32,
          number: "404",
          capacity: 3,
          availableBeds: 3,
        },
      ],
    },
    {
      availableBeds: 36,
      id: 3,
      name: "Driven World",
      image: "https://i.ibb.co/Z2dKHp9/Driven-World.png",
      rooms: [
        {
          id: 33,
          number: "101",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 34,
          number: "102",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 35,
          number: "103",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 36,
          number: "104",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 37,
          number: "201",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 38,
          number: "202",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 39,
          number: "203",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 40,
          number: "204",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 41,
          number: "301",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 42,
          number: "302",
          capacity: 1,
          availableBeds: 1,
        },
        {
          id: 43,
          number: "303",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 44,
          number: "304",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 45,
          number: "401",
          capacity: 2,
          availableBeds: 2,
        },
        {
          id: 46,
          number: "402",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 47,
          number: "403",
          capacity: 3,
          availableBeds: 3,
        },
        {
          id: 48,
          number: "404",
          capacity: 3,
          availableBeds: 3,
        },
      ],
    },
  ];
  return (
    <>
      <HotelPage>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <HotelWrapper>
          {hotels.map((hotel) => {
            return (
              <Hotel
                selected={selected}
                setSelected={setSelected}
                id={hotel.id}
              />
            );
          })}
        </HotelWrapper>
        {selected ? (
          <>
            <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
            <RoomWrapper>
              {hotels[1].rooms.map((room) => {
                return <Room room={room}/>;
              })}
            </RoomWrapper>
          </>
        ) : (
          ""
        )}
      </HotelPage>
    </>
  );
}

const Subtitle = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 400;
  margin-bottom: 18px;
`;

const HotelPage = styled.div`
  font-family: "Roboto", sans-serif;
`;
