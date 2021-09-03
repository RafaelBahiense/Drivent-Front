import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  save(body) {
    return api.post("/tickets", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getPersonalInformations() {
    return api.get("/tickets", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
