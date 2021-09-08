import styled from "styled-components";
import Activity from "./Activity";
export default function ActivityBox() {
  return (
    <>
      <Container>
        <ActivitySection>
          <PlaceName>Auditório Principal</PlaceName>
          <ActivityWrapper>
            <Activity />
          </ActivityWrapper>
        </ActivitySection>
        <ActivitySection>
          <PlaceName>Auditório Principal</PlaceName>
          <ActivityWrapper>
            <Activity />
          </ActivityWrapper>
        </ActivitySection>
        <ActivitySection>
          <PlaceName>Auditório Principal</PlaceName>
          <ActivityWrapper>
            <Activity />
          </ActivityWrapper>
        </ActivitySection>
      </Container>
    </>
  );
}

const PlaceName = styled.p`
  display: inline-block;
  font-size: 17px;
  color: #7b7b7b;
  width: 100%;
  text-align: center;
`;
const ActivityWrapper = styled.div`
  width: 100%;
  height: 390px;
  border: 1px solid #d7d7d7;
  
`;
const Container = styled.div`
  display: flex;
`;
const ActivitySection = styled.div`
  width: 288px;
  :nth-last-child(1){
    border-right: none;
  }
`;
