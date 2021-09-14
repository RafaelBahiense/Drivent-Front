import api from "./api";

export default class Recovery {
  sendEmail(email) {
    return api.post("/recovery", { email });
  }
}
