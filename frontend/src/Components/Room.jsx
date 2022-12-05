import styled from "styled-components";

const RoomContainer = styled.div`
  height: ${(props) => 90 / props.numberOfRooms}vh;
  width: 100%;
`;
const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContainerTitle = styled.p`
  color: white;
  text-align: center;
`;

const RoomTitle = styled.p`
  color: white;
  font: bold;
`;
const Room = ({ room }) => {
  return (
    <RoomContainer>
      <RoomTitle>{room?.name}</RoomTitle>
      <GamesContainer>
        <ContainerTitle>Games</ContainerTitle>
      </GamesContainer>
      <SummaryContainer>
        <ContainerTitle>Summary</ContainerTitle>
      </SummaryContainer>
    </RoomContainer>
  );
};

export default Room;
