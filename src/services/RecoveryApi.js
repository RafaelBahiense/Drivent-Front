import api from "./api";

export default class Recovery {
  sendCodeToEmail(email) {
    return api.post("/recovery", { email });
  }

  verifyCode(email, code) {
    return api.post("/recovery/verify", { email, code });
  }

  setNewPassword(email, code, password) {
    return api.post("/recovery/new", {
      email,
      code,
      password,
    });
  }
}
