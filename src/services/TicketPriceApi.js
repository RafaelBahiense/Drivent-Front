import api from "./api";

export default class TicketPriceApi {
  getTicketPrices() {
    return api.get("/ticket/prices");
  }
}
