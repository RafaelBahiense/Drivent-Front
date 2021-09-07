import styled from "styled-components";

const RoomButton = styled.button`
  margin-top: 46px;
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 400;
  margin-top: 52px;
  margin-bottom: 18px;
`;

const HotelPage = styled.div`
  font-family: "Roboto", sans-serif;
`;

const HotelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 52px;
  @media(max-width:850px) and (min-width:600px){
    margin-bottom: 40px;
  }
  @media(max-width:600px){
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export { RoomButton, Subtitle, HotelPage, HotelWrapper };
