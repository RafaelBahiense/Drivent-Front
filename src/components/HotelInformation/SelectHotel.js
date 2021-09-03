import styled from "styled-components";
import Hotel from "../HotelInformation/Hotel";
import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";

export default function HotelSelection() {
  const [selected, setSelected] = useState(null);
  const [hotelData, setHotelData] = useState([]);

  const api = useApi();
  
  useEffect(() => {
    const promisse = api.hotels.getHotelInfo();
    promisse.then((data) => {
      setHotelData(data.data);
    });
    promisse.catch(() => {
      console.log("Erro");
    });
  }, []);
  return (
    <>
      <HotelPage>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <HotelWrapper>
          {hotelData.map((hotel) => {
            return (
              <Hotel
                key={hotel.id}
                selected={selected}
                setSelected={setSelected}
                hotel={hotel}
              />
            );
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

const HotelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
