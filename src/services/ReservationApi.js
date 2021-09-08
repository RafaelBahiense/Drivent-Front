import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ReservationApi extends AuthenticatedApi {
  getReservationInfo() {
    return api.get("/reservation/", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  postReservation(roomId, changeRoom) {
    return api.post(
      "/reservation/",
      { roomId: roomId, changeRoom: changeRoom },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
