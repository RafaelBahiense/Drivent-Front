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

  postNewReservation({ isPresencial, hasHotel }) {
    return api.post(
      "/reservation/new",
      { isPresencial, hasHotel },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }

  postRoomReservation(roomId, changeRoom) {
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
