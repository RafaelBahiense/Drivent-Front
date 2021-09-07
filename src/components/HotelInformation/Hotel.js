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
  room,
}) {
  const checker = [selectedHotel, hotel?.id];
  let roomType;
  let otherPeopleinRoom;
  if (room) {
    roomType =
      room?.capacity === 1
        ? "Single"
        : room?.capacity === 2
          ? "Double"
          : "Triple";
    otherPeopleinRoom = room?.capacity - room?.availableBeds - 1;
  }

  return (
    <HotelBox
      onClick={() => {
        setSelectedHotel(hotel.id);
        setSelectedRoom(null);
      }}
      checker={checker}
      resumeHotel={room?.number}
    >
      <HotelImage src={hotel?.image} alt="an hotel" />
      <HotelName> {hotel?.name}</HotelName>
      <DescriptionTitle>
        {room?.number ? "Quarto reservado:" : "Tipos de acomodação:"}
      </DescriptionTitle>
      <DescriptionInfo>
        {room?.number ? `${room.number} (${roomType})` : hotel?.roomsTypes}
      </DescriptionInfo>
      <DescriptionTitle>
        {room?.number ? "Pessoas no seu quarto:" : "Vagas disponíveis:"}
      </DescriptionTitle>
      <DescriptionInfo>
        {room?.number
          ? `Você ${otherPeopleinRoom ? "e mais " + otherPeopleinRoom : ""}`
          : hotel?.availableBeds}
      </DescriptionInfo>
    </HotelBox>
  );
}
