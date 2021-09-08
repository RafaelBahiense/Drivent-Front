import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function PaymentInfos() {
  return (
    <>
      <TitleTypography variant="h4">Ingresso escolhido</TitleTypography>
    </>
  );
}

const TitleTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
