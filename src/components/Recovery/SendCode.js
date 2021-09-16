import { useState, useContext } from "react";
import { toast } from "react-toastify";

import Input from "../Form/Input";
import Button from "../Form/Button";
import Link from "../Link";
import { Row, Label } from "../Auth";

import useApi from "../../hooks/useApi";

export default function SendCode({ emailState, setEmailSent }) {
  const { email, setEmail } = emailState;
  const [loadingRecovery, setLoadingRecovery] = useState(false);

  const api = useApi();

  function submit(event) {
    event.preventDefault();
    setLoadingRecovery(true);

    api.recovery
      .sendCodeToEmail(email)
      .then(() => {
        setEmailSent(true);
        toast("E-mail enviado com sucesso");
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error(error);

        if (error.response) {
          toast("Não foi possível enviar o e-mail");
        } else {
          toast("Não foi possível conectar ao servidor!");
        }
      })
      .then(() => {
        setLoadingRecovery(false);
      });
  }

  return (
    <>
      <Row>
        <Label>Recuperação de senha</Label>
        <form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingRecovery}
          >
            Enviar e-mail
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Se lembrou da senha? Faça login</Link>
      </Row>
    </>
  );
}
