import styled from "styled-components";
import Activity from "./Activity";
export default function ActivityBox({ eventDay }) {
  return (
    <>
      <Container>
        <ActivitySection>
          <PlaceName>Auditório Principal</PlaceName>
          <ActivityWrapper>
            {eventDay.activities
              .filter(
                (activity) =>
                  activity.activityPlace.name === "Auditório Principal"
              )
              .map((activity) => (
                <Activity key={activity.id} activity={activity} date={eventDay.date}/>
              ))}
          </ActivityWrapper>
        </ActivitySection>
        <ActivitySection>
          <PlaceName>Auditório Lateral</PlaceName>
          <ActivityWrapper>
            {eventDay.activities
              .filter(
                (activity) =>
                  activity.activityPlace.name === "Auditório Lateral"
              )
              .map((activity) => (
                <Activity key={activity.id} activity={activity} date={eventDay.date} />
              ))}
          </ActivityWrapper>
        </ActivitySection>
        <ActivitySection>
          <PlaceName>Sala de Workshop</PlaceName>
          <ActivityWrapper>
            {eventDay.activities
              .filter(
                (activity) => activity.activityPlace.name === "Sala de Workshop"
              )
              .map((activity) => (
                <Activity key={activity.id} activity={activity} date={eventDay.date} />
              ))}
          </ActivityWrapper>
        </ActivitySection>
      </Container>
    </>
  );
}

const PlaceName = styled.p`
  display: inline-block;
  font-size: 17px;
  color: #7b7b7b;
  width: 100%;
  text-align: center;
`;
const ActivityWrapper = styled.div`
  width: 100%;
  height: 390px;
  border: 1px solid #d7d7d7;
`;
const Container = styled.div`
  margin-top: 30px;
  display: flex;
`;
const ActivitySection = styled.div`
  width: 288px;
`;
