import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

import useApi from "../../hooks/useApi";
import UserContext from "../../contexts/UserContext";

export default function Activity({ activity, date }) {
  const [places, setPlaces] = useState(
    activity.totalSeats - activity.users.length
  );
  const [enrolled, setEnrolled] = useState(false);
  const { userData } = useContext(UserContext);
  console.log(activity);

  const api = useApi();

  useEffect(() => {
    const foundSeatReservation = activity.users.find(
      (user) => user.userId === userData.user.id
    );
    if (foundSeatReservation) {
      setEnrolled(true);
    }
  }, []);

  function reservateSeat() {
    const request = api.activity.saveSeatReservation(activity.id);
    request.then(() => {
      setEnrolled(!enrolled);
    });
    request.catch(() => {
      console.log("deu ruim");
    });
  }

  return (
    <ActivityCard enrolled={enrolled} duration={activity.duration}>
      <ActivityInformationBox>
        <ActivityTitle>{activity.name}</ActivityTitle>
        <ActivityTime>
          {dayjs(`${date} ${activity.time}`).format("HH:mm") +
            " - " +
            dayjs(`${date} ${activity.time}`)
              .add(activity.duration, "minute")
              .format("HH:mm")}
        </ActivityTime>
      </ActivityInformationBox>
      <PlaceInformationBox enrolled={enrolled} places={places}>
        {enrolled ? (
          <>
            <AiOutlineCheckCircle className="icon" />
            <NumberOfPlaces>Inscrito</NumberOfPlaces>
          </>
        ) : places > 0 ? (
          <>
            <BiLogIn className="icon" onClick={() => reservateSeat()} />
            <NumberOfPlaces>
              {places > 1 ? places + " vagas" : places + " vaga"}
            </NumberOfPlaces>
          </>
        ) : (
          <>
            <AiOutlineCloseCircle className="icon" />
            <NumberOfPlaces>Esgotado</NumberOfPlaces>
          </>
        )}
      </PlaceInformationBox>
    </ActivityCard>
  );
}
const ActivityCard = styled.div`
  width: 265px;
  height: ${(props) => `${(props.duration / 60) * 80}px`};
  background-color: ${(props) => (props.enrolled ? "#D0FFDB" : "#F1F1F1")};
  margin: 10px auto;
  border-radius: 5px;
  font-size: 12px;
  color: #343434;
  display: flex;
  align-items: center;
`;
const ActivityTitle = styled.p`
  font-weight: 700;
  margin-bottom: 6px;
`;
const ActivityTime = styled.p`
  font-weight: 400;
`;

const ActivityInformationBox = styled.div`
  border-right: 1px solid #cfcfcf;
  width: 190px;
  height: calc(100% - 20px);
  margin-left: 10px;
`;
const PlaceInformationBox = styled.div`
  color: ${(props) => (props.enrolled || props.places > 0   ? "#078632" : "#CC6666")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  .icon {
    font-size: 22px;
  }
`;
const NumberOfPlaces = styled.p`
  font-size: 9px;
`;
