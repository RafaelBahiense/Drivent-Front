import styled from "styled-components";

export default function HasNoHotel() {
  return (
    <ContainerNoHotelSelection>
      Sua modalidade de ingresso não inclui hospedagem <br /> Prossiga para a
      escolha de atividades
    </ContainerNoHotelSelection>
  );
}

const ContainerNoHotelSelection = styled.div`
  width: 100%;
  height: calc(100% - 61px);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20%;
  text-align: center;

  color: #8e8e8e;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;

export { ContainerNoHotelSelection };
