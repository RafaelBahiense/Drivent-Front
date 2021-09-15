import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ProfilePictureApi extends AuthenticatedApi {
  postProfilePicture(pictureUrl) {
    return api.post(
      "/avatar/",
      { pictureUrl: pictureUrl },
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
