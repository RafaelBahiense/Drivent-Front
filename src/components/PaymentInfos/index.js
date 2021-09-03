import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useApi from "../../hooks/useApi";

export default function PaymentInfos() {
  const [enrollmentData, setEnrollmentData] = useState(null);
  const { enrollment } = useApi();

  useEffect(() => {
    enrollment.getPersonalInformations().then((response) => {
      if (response.status !== 200) {
        setEnrollmentData({});
        return;
      }
      setEnrollmentData(response.data);
    });
  }, []);

  if (!enrollmentData) return "Carregando...";
  if (!enrollmentData.address) return "Preecha suas informações!";

  return (
    <>
      <TitleTypography variant="h4">Ingresso e pagamento</TitleTypography>
      <SubtitleTypography variant="subtitle1">
        Primeiro, escolha sua modalidade de ingresso
      </SubtitleTypography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TicketOptions>
            Presencial<span>R$ 250</span>
          </TicketOptions>
        </Grid>
        <Grid item>
          <TicketOptions>
            Online<span>R$ 100</span>
          </TicketOptions>
        </Grid>
      </Grid>
    </>
  );
}

const TitleTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubtitleTypography = styled(Typography)`
  margin-bottom: 10px !important;
  color: #8e8e8e;
  font-size: 20px !important;
`;

const TicketOptions = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 20px;

  span {
    color: #898989;
  }
`;
