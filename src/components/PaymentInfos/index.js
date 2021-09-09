import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import TicketSelection from "./TicketSelection";
import CreditCard from "./CreditCard";

export default function PaymentInfos() {
  const [enrollmentData, setEnrollmentData] = useState();
  const [hasHotel, setHasHotel] = useState();
  const [isOnline, setIsOnline] = useState();
  const [prices, setPrices] = useState();
  const [reservationData, setReservationData] = useState();
  const { enrollment, ticketPrices, reservation } = useApi();

  useEffect(() => {
    reservation.getUserReservation().then((res) => {
      setReservationData(res.data);
      if (res.data) {
        setIsOnline(!res.data.ticket.isPresencial);
        setHasHotel(res.data.ticket.hasHotel);
      }
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

  const ticketSelectionObj = {
    reservationData,
    isOnline,
    setIsOnline,
    prices,
    value,
    reserveTicket,
    hasHotel,
    setHasHotel,
  };

  const ticketInfos = {
    isOnline,
    hasHotel,
    value,
  };

  return (
    <>
      {reservationData ? (
        <CreditCard {...ticketInfos} />
      ) : (
        <TicketSelection {...ticketSelectionObj} />
      )}
    </>
  );
}
