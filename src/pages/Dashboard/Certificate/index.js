import { useState, useContext } from "react";
import EventInfoContext from "../../../contexts/EventInfoContext";
import styled from "styled-components";
import dayjs from "dayjs";

import Typography from "@material-ui/core/Typography";
import { ContainerMissingStepsMessage } from "../../../components/HotelInformation/MissingStepsMessage";

export default function Certificate() {
  const { eventInfo } = useContext(EventInfoContext);
  const [eventIsOver] = useState(
    dayjs().isAfter(eventInfo.endDate)
  );

  return (
    <>
      <StyledTypography variant="h4">Certificado</StyledTypography>
      {eventIsOver ? (
        <ContainerMissingStepsMessage>
          Estamos trabalhando na emissão do seu certificado.
        </ContainerMissingStepsMessage>
      ) : (
        <ContainerMissingStepsMessage>
          O seu certificado será emitido após o fim do evento.
        </ContainerMissingStepsMessage>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
