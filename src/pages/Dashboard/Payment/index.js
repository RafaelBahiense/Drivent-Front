import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useApi from "../../../hooks/useApi";
import Lodge from "./Lodge";
import Resume from "./Resume";

export default function Payment() {
  const api = useApi();
  const [lodge, setLodge] = useState();
  const [prices, setPrices] = useState();

  useEffect(() => {
    api.ticketPrices
      .getTicketPrices()
      .then((res, req) => {
        setPrices(res.data);
      })
      .catch(() => {
        toast("Algo deu errado.");
      });
  }, []);

  const checkoutValue = lodge ? prices.hotel : 0;

  return (
    <>
      <Lodge lodge={lodge} setLodge={setLodge} prices={prices} />
      {lodge !== undefined ? <Resume value={checkoutValue} /> : ""}
    </>
  );
}
