import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import api from "../../services/api";

import HasNoHotel from "./HasNoHotel";
import HasNoPayment from "./HasNoPayment";
import SelectHotel from "./SelectHotel";

dayjs.extend(CustomParseFormat);

export default function HotelInformation() {
  const [userStatus, setUserStatus] = useState({
    payment: { id: 1 },
    ticket: { isPresencial: true, hasHotel: true },
  });
  useEffect(() => {
    const request = api.get(
      `${process.env.REACT_APP_API_BASE_URL}/reservations`
    );
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
        <HasNoHotel />
      ) : userStatus?.ticket?.hasHotel ? (
        <SelectHotel />
      ) : (
        <HasNoHotel />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
