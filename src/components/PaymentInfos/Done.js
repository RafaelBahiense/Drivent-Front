import styled from "styled-components";
import check from "../../assets/images/check.png";

export default function Done() {
  return (
    <Container>
      <Icon src={check} />
      <div>
        <p>Pagamento confirmado!</p>
        <p className="sub">Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </Container>
  );
}

const Icon = styled.img`
  margin-right: 13px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  .sub {
    font-weight: normal;
    color: rgba(0, 0, 0, 0.75);
  }
`;
