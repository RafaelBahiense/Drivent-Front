import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class HotelApi extends AuthenticatedApi {
  getHotelInfo() {
    return api.get("/hotels/", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
