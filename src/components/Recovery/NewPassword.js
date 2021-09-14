import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Input from "../Form/Input";
import Button from "../Form/Button";
import { Row, Label } from "../Auth";
import Link from "../Link";

import useApi from "../../hooks/useApi";

export default function NewPassword({ email, code }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingNewPassword, setLoadingNewPassword] = useState(false);

  const history = useHistory();

  const api = useApi();

  function submit(event) {
    event.preventDefault();
    setLoadingNewPassword(true);

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
    } else {
      api.recovery
        .setNewPassword(email, code, password)
        .then(() => {
          toast("Senha redefinida! Por favor, faça login.");
          history.push("/sign-in");
        })
        .catch((error) => {
          if (error.response) {
            toast("Não foi possível redefinir sua senha");
          } else {
            toast("Não foi possível conectar ao servidor!");
          }
        })
        .then(() => {
          setLoadingNewPassword(false);
        });
    }
  }

  return (
    <>
      <Row>
        <Label>Redefinição de senha</Label>
        <form onSubmit={submit}>
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            disabled={loadingNewPassword}
          >
            Redefinir
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Se lembrou da senha? Faça login</Link>
      </Row>
    </>
  );
}
