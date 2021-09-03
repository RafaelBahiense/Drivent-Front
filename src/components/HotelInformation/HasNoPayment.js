import { ContainerMissingStepsMessage } from "./MissingStepsMessage";

export default function HasNoPayment() {
  return (
    <ContainerMissingStepsMessage>
      Você precisa ter confirmado pagamento antes de fazer a escolha de
      hospedagem
    </ContainerMissingStepsMessage>
  );
}
