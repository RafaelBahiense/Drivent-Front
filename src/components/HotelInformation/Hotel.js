import styled from "styled-components";

export default function Hotel({
  selectedHotel,
  setSelectedHotel,
  hotel,
  setSelectedRoom,
}) {
  const checker = [selectedHotel, hotel.id];
  return (
    <HotelBox
      onClick={() => {
        setSelectedHotel(hotel.id);
        setSelectedRoom(null);
      }}
      checker={checker}
    >
      <HotelImage src={hotel.image} alt="an hotel" />
      <HotelName> {hotel.name}</HotelName>
      <DescriptionTitle>Tipos de acomodação:</DescriptionTitle>
      <DescriptionInfo>{hotel.roomsTypes}</DescriptionInfo>
      <DescriptionTitle>Vagas disponíveis:</DescriptionTitle>
      <DescriptionInfo>{hotel.availableBeds}</DescriptionInfo>
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
const DescriptionTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #3c3c3c;
  margin-bottom: 2px;
`;

const DescriptionInfo = styled.p`
  font-size: 12px;
  color: #3c3c3c;
  margin-bottom: 14px;
`;