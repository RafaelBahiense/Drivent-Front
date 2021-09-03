import styled from "styled-components";

export default function Lodge({ lodge, setLodge, prices }) {
  return (
    <>
      <Description>
        Ótimo! Agora escolha sua modalidade de hospedagem
      </Description>
      <Container>
        <Button
          className={lodge === undefined ? null : lodge ? null : "selected"}
          onClick={() => setLodge(false)}
          lodge={lodge}
        >
          <p className="name">Sem Hotel</p>
          <p className="price">+ R$ 0</p>
        </Button>
        <Button
          className={lodge === undefined ? null : lodge ? "selected" : null}
          onClick={() => setLodge(true)}
          lodge={!lodge}
        >
          <p className="name">Com Hotel</p>
          <p className="price">+ R$ {prices?.hotel || "-"}</p>{" "}
        </Button>
      </Container>
    </>
  );
}

const Description = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  font-family: "Roboto", sans-serif;
  margin-top: 44px;
`;

const Container = styled.div`
  margin-top: 17px;
  display: flex;
  .selected {
    border: none;
    background-color: #ffeed2;
  }
`;

const Button = styled.div`
  cursor: pointer;
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    color: #454545;
    font-size: 16px;
  }
  .price {
    margin-top: 3px;
    font-size: 14px;
    color: #898989;
  }
`;
