import styled from "styled-components";
import { HotelWrapper } from "../HotelInformation/HotelWrapper";
import Hotel from "../HotelInformation/Hotel";
import { useState } from "react";

export default function HotelSelection() {
  const [selected, setSelected] = useState(null);
  const hotels = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <>
      <HotelPage>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <HotelWrapper>
          {hotels.map((hotel) => {
            return <Hotel selected={selected} setSelected={setSelected} id={hotel.id}/>;
          })}
        </HotelWrapper>
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
