import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { HotelWrapper } from "./HotelWrapper";
import Hotel from "./Hotel";

export default function HotelSelection() {
  let array = [1, 2, 3, 4];
  return (
    <>
      <HotelPage>
        <StyledTypography variant="h4">
          Escolha de hotel e quarto
        </StyledTypography>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <HotelWrapper>
          {array.map(() => {
            return <Hotel />;
          })}
        </HotelWrapper>
      </HotelPage>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 36px !important;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-weight: 400;
  margin-bottom: 18px;
`;

const HotelPage = styled.div`
  font-family: "Roboto", sans-serif;
`;
