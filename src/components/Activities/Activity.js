import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import UserContext from "../../contexts/UserContext";

export default function Activity({ activity, date }) {
  const [places, setPlaces] = useState(
    activity.totalSeats - activity.users.length
  );
  const [enrolled, setEnrolled] = useState(false);
  const { userData } = useContext(UserContext);
  const api = useApi();

  useEffect(() => {
    setPlaces(activity.totalSeats - activity.users.length);
  }, [activity]);

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
      activity.users.push({
        userId: userData.user.id,
        activityId: activity.id,
      });
    });

    request.catch((error) => {
      if (error.response.status === 409) {
        toast(
          "Você já está inscrito em uma atividade neste mesmo horário"
        );
      }
    });
  }

  function deleteSeat() {
    const request = api.activity.deleteSeatReservation(activity.id);
    request.then(() => {
      setEnrolled(!enrolled);
      activity.users = activity.users.filter((user) => {
        if (
          user.userId === userData.user.id &&
          user.activityId === activity.id
        ) {
          return false;
        } else {
          return true;
        }
      });
      setPlaces(activity.totalSeats - activity.users.length);
    });
    request.catch((error) => {
      toast(
        "Houve um erro ao retirar a sua reserva. Tente novamente em alguns segundos."
      );
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
            <AiOutlineCheckCircle
              className="icon"
              onClick={() => deleteSeat()}
            />
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
  color: ${(props) =>
    props.enrolled || props.places > 0 ? "#078632" : "#CC6666"};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  .icon {
    font-size: 22px;
    cursor: pointer;
  }
`;
const NumberOfPlaces = styled.p`
  font-size: 9px;
`;
