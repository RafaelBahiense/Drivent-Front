import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import MissingStepsMessage from "./MissingStepsMessage";
import HasNoPayment from "./HasNoPayment";
import SelectHotel from "./SelectHotel";
import useApi from "../../hooks/useApi";

dayjs.extend(CustomParseFormat);

export default function HotelInformation() {
  const [userStatus, setUserStatus] = useState({});
  const api = useApi();

  useEffect(() => {
    const request = api.reservation.getReservationInfo();
    request.then((response) => {
      setUserStatus(response.data);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">
        Escolha de Hotel e Quarto
      </StyledTypography>
      {!userStatus?.payment?.id ? (
        <HasNoPayment />
      ) : !userStatus?.ticket?.isPresencial ? (
        <MissingStepsMessage />
      ) : userStatus?.ticket?.hasHotel ? (
        <SelectHotel />
      ) : (
        <MissingStepsMessage />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
