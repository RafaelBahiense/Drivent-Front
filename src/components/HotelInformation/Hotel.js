import {
  HotelBox,
  HotelImage,
  HotelName,
  DescriptionTitle,
  DescriptionInfo,
} from "./HotelStyles";

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

