import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ActivitiesApi extends AuthenticatedApi {
  getActivities() {
    return api.get("/activities/", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  saveSeatReservation(activityId) {
    return api.post(
      "/activities/",
      { activityId: activityId },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
  
  deleteSeatReservation(activityId) {
    return api.post(
      "/activities/delete",
      { activityId: activityId },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
