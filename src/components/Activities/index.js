import { useEffect, useState } from "react";
import styled from "styled-components";
import useApi from "../../hooks/useApi";

import EventDayButton from "./EventDayButton";
import { toast } from "react-toastify";
import ActivityBox from "./ActivitiesBox";

export default function SelectEventDay() {
  const [selectedDay, setSelectedDay] = useState();
  const [eventDays, setEventDays] = useState([]);

  const api = useApi();

  useEffect(() => {
    getActivitiesInfos();
    const intervalId = setInterval(() => {
      getActivitiesInfos();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getActivitiesInfos() {
    const response = api.activity.getActivities();
    response.then((data) => {
      setEventDays(data.data);
    });
    response.catch(() => {
      toast(
        "Houve um erro ao carregar as atividades. Tente novamente em alguns minutos"
      );
    });
  }

  return (
    <>
      <Wrapper>
        <Subtitle>Primeiro filtre pelo dia do evento</Subtitle>
        {eventDays.map((eventDay) => (
          <EventDayButton
            key={eventDay.id}
            eventDay={eventDay}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
          />
        ))}
        {selectedDay && (
          <ActivityBox
            eventDay={eventDays.filter((day) => day.id === selectedDay)[0]}
          />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
`;
const Subtitle = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 400;
  margin-bottom: 18px;
`;
