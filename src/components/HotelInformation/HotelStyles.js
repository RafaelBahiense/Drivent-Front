import styled from "styled-components";

const HotelBox = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.checker[0] === props.checker[1] || props.resumeHotel ? "#FFEED2" : "#F1F1F1"};
  margin-right: 19px;
  padding-left: 14px;
  pointer-events: ${(props) => (props.resumeHotel ? "none" : "initial")};
  cursor: pointer;
  @media (max-width: 858px) and (min-width: 600px) {
    width: 155px;
    height: 208px;
    margin-right: 10px;
  }
  @media (max-width: 700px) and (min-width: 600px) {
    width: 125px;
    height: 208px;
    margin-right: 8px;
    padding-left: 11px;
  }
`;

const HotelImage = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
  margin: 16px 14px 10px 0px;
  @media (max-width: 858px) and (min-width: 600px) {
    width: 132px;
    height: 86px;
    margin: 12px 0px 10px -3px;
  }
  @media (max-width: 700px) and (min-width: 600px) {
    width: 108px;
    height: 70px;
  }
`;
const HotelName = styled.p`
  font-size: 20px;
  color: #343434;
  margin-bottom: 10px;
  @media (max-width: 858px) and (min-width: 600px) {
    font-size: 18px;
  }
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
  margin-bottom: 16px;
@media (max-width: 858px) and (min-width: 600px) {
  margin-bottom: 03px;
  }
`;

export { HotelBox, HotelImage, HotelName, DescriptionTitle, DescriptionInfo };
