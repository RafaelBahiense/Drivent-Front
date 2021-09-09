import TicketType from "./TicketType";
import Title from "./Title";

import ResumeCheckout from "./ResumeCheckout";

export default function TicketSelection({
  reservationData,
  isOnline,
  setIsOnline,
  prices,
  value,
  reserveTicket,
  hasHotel,
  setHasHotel,
}) {
  return (
    <>
      <Title text={"Ingresso e pagamento"} />
      {reservationData ? (
        "Payment under development"
      ) : (
        <>
          <TicketType
            condition={isOnline}
            setCondition={setIsOnline}
            subtitle={"Primeiro, escolha sua modalidade de ingresso"}
            names={["Presencial", "online"]}
            prices={[prices?.presencial, prices?.online]}
          />
          {isOnline !== undefined ? (
            isOnline ? (
              <ResumeCheckout value={value} reserveTicket={reserveTicket} />
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
                  <ResumeCheckout value={value} reserveTicket={reserveTicket} />
                ) : null}
              </>
            )
          ) : null}
        </>
      )}
    </>
  );
}
