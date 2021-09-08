import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

export default function Activity() {
  const [places, setPlaces] = useState(2);
  const [enrolled, setEnrolled] = useState(false);
  return (
    <ActivityCard enrolled={enrolled}>
      <ActivityInformationBox>
        <ActivityTitle>Minecraft: montando o PC ideal</ActivityTitle>
        <ActivityTime>09:00 - 10:00</ActivityTime>
      </ActivityInformationBox>
      <PlaceInformationBox places={places}>
        {enrolled ? (
          <>
            <AiOutlineCheckCircle className="icon" />
            <NumberOfPlaces>Inscrito</NumberOfPlaces>
          </>
        ) : places > 0 ? (
          <>
            <BiLogIn className="icon" />
            <NumberOfPlaces>27 vagas</NumberOfPlaces>
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
  height: 80px;
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
  color: ${(props) => (props.places > 0 ? "#078632" : "#CC6666")};
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
