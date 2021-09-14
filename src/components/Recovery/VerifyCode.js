import { useState } from "react";
import { toast } from "react-toastify";

import Input from "../Form/Input";
import Button from "../Form/Button";
import Link from "../Link";
import { Row, Label } from "../Auth";

import useApi from "../../hooks/useApi";

export default function VerifyCode({ codeState, email, setCodeVerified }) {
  const { code, setCode } = codeState;
  const [loadingVerification, setLoadingVerification] = useState(false);

  const api = useApi();

  function submit(event) {
    event.preventDefault();
    setLoadingVerification(true);

    api.recovery
      .checkCode(email, code)
      .then(() => {
        setCodeVerified(true);
        toast("Código validado");
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error(error);

        if (error.response) {
          toast("Código inválido");
        } else {
          toast("Não foi possível conectar ao servidor!");
        }
      })
      .then(() => {
        setLoadingVerification(false);
      });
  }

  return (
    <>
      <Row>
        <Label>Recuperação de senha</Label>
        <form onSubmit={submit}>
          <Input
            label="Código de verificação"
            type="text"
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingVerification}
          >
            Verificar código
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Se lembrou da senha? Faça login</Link>
      </Row>
    </>
  );
}
