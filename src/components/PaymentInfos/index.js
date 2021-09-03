import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";
import TicketType from "./TicketType";

import { toast } from "react-toastify";

export default function PaymentInfos() {
  const [enrollmentData, setEnrollmentData] = useState();
  const [hasHotel, setHasHotel] = useState();
  const [isOnline, setIsOnline] = useState();
  const [prices, setPrices] = useState();
  const { enrollment, ticketPrices } = useApi();

  useEffect(() => {
    ticketPrices
      .getTicketPrices()
      .then((res, req) => {
        setPrices(res.data);
      })
      .catch(() => {
        toast("Algo deu errado.");
      });

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

  let value = 0;

  if (isOnline) {
    value = prices?.online;
  } else {
    value += prices?.presencial;
    if (hasHotel) {
      value += prices?.hotel;
    }
  }

  return (
    <>
      <TitleTypography variant="h4">Ingresso e pagamento</TitleTypography>
      <TicketType
        condition={isOnline}
        setCondition={setIsOnline}
        subtitle={"Primeiro, escolha sua modalidade de ingresso"}
        names={["Presencial", "online"]}
        prices={[prices?.presencial, prices?.online]}
      />
      {isOnline !== undefined ? (
        isOnline ? (
          <>
            <Description>
              Fechado! O total ficou em <span>R$ {value}.</span> Agora é só
              confirmar:
            </Description>
            <ReserveButton>RESERVAR INGRESSO</ReserveButton>
          </>
        ) : (
          <>
            <TicketType
              condition={hasHotel}
              setCondition={setHasHotel}
              subtitle={"Ótimo! Agora escolha sua modalidade de hospedagem"}
              names={["Sem Hotel", "Com Hotel"]}
              prices={[0, prices?.hotel]}
            />
            {hasHotel !== undefined ? (
              <>
                <Description>
                  Fechado! O total ficou em <span>R$ {value}.</span> Agora é só
                  confirmar:
                </Description>
                <ReserveButton>RESERVAR INGRESSO</ReserveButton>
              </>
            ) : null}
          </>
        )
      ) : null}
    </>
  );
}

const TitleTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Description = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-family: "Roboto", sans-serif;
  margin-top: 44px;
  span {
    font-weight: bold;
  }
`;

const ReserveButton = styled.div`
  width: 162px;
  height: 37px;
  margin-top: 17px;
  border-radius: 4px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;
