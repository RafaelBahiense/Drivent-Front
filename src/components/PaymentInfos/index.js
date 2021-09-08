import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";
import TicketType from "./TicketType";
import Subtitle from "../Shared/Subtitle";

export default function PaymentInfos() {
  const [enrollmentData, setEnrollmentData] = useState();
  const [hasHotel, setHasHotel] = useState();
  const [isOnline, setIsOnline] = useState();
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
      <TitleTypography variant="h4" onClick={() => setHasHotel(undefined)}>
        Ingresso e pagamento
      </TitleTypography>
      <TicketType
        condition={isOnline}
        setCondition={setIsOnline}
        subtitle={"Primeiro, escolha sua modalidade de ingresso"}
        names={["Presencial", "online"]}
        prices={[250, 100]}
      />
      {isOnline !== undefined ? (
        isOnline ? (
          <>
            <TicketType
              condition={hasHotel}
              setCondition={setHasHotel}
              subtitle={"Ótimo! Agora escolha sua modalidade de hospedagem"}
              names={["Sem Hotel", "Com Hotel"]}
              prices={[0, 350]}
            />
            {hasHotel !== undefined ? (
              <Subtitle text={"resumo do pedido"} />
            ) : null}
          </>
        ) : (
          <Subtitle text={"resumo do pedido"} />
        )
      ) : null}
    </>
  );
}

const TitleTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
