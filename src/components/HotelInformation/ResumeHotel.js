import { useHistory } from "react-router-dom";
import Hotel from "../HotelInformation/Hotel";
import {
  RoomButton,
  Subtitle,
  HotelPage,
  HotelWrapper,
} from "./HotelPageStyle";

export default function ResumeHotel({ userStatus }) {
  const history = useHistory();

  function changeRoom() {
    userStatus.changeRoom = userStatus.room.id;
    delete userStatus.room;
    history.push("/dashboard/hotel");
  }

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
        <RoomButton onClick={changeRoom}>TROCAR DE QUARTO</RoomButton>
      </HotelPage>
    </>
  );
}
