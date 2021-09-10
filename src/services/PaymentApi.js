import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class PaymentApi extends AuthenticatedApi {
  postPayment({ value, reservationId }) {
    return api.post(
      "/payments",
      { value, reservationId },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
