import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../../hooks/useApi";

import { ContainerMissingStepsMessage } from "../../../components/HotelInformation/MissingStepsMessage";

export default function Activities() {
  const [userStatus, setUserStatus] = useState([{}]);
  const api = useApi();

  useEffect(() => {
    const request = api.reservation.getReservationInfo();
    request.then((response) => {
      setUserStatus(response.data);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {!userStatus[0]?.payment?.id ? (
        <ContainerMissingStepsMessage>
          Você precisa ter confirmado o pagamento antes <br /> de fazer a
          escolha de atividades.
        </ContainerMissingStepsMessage>
      ) : !userStatus[0]?.ticket?.isPresencial ? (
        <ContainerMissingStepsMessage>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá
          acesso a todas as atividades.
        </ContainerMissingStepsMessage>
      ) : (
        <SelectActivity />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SelectActivity = styled.div``;
