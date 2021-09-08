import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";
import TicketType from "./TicketType";

import { toast } from "react-toastify";
import Resume from "./Resume";

export default function PaymentInfos() {
  const [enrollmentData, setEnrollmentData] = useState();
  const [hasHotel, setHasHotel] = useState();
  const [isOnline, setIsOnline] = useState();
  const [prices, setPrices] = useState();
  const { enrollment, ticketPrices, reservation } = useApi();
  const [reservationData, setReservationData] = useState();

  useEffect(() => {
    reservation.getUserReservation().then((res) => {
      setReservationData(res.data);
    });

    ticketPrices
      .getTicketPrices()
      .then((res) => {
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
  console.log(reservationData); //TIRAR
  if (isOnline) {
    value = prices?.online;
  } else {
    value += prices?.presencial;
    if (hasHotel) {
      value += prices?.hotel;
    }
  }

  function reserveTicket() {
    const body = {
      isPresencial: !isOnline,
      hasHotel: !!hasHotel,
    };
    reservation
      .postNewReservation(body)
      .then((res) => {
        toast("Ticket reservado.");
        setReservationData(res.data);
      })
      .catch(() => {
        toast("Algo deu errado.");
      });
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
          <Resume value={value} reserveTicket={reserveTicket} />
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
              <Resume value={value} reserveTicket={reserveTicket} />
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
