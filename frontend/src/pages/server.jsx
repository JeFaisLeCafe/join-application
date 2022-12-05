import styled from "styled-components";
import { Container, Title } from "../Components/ui";
import { useParams } from "react-router-dom";
import Room from "../Components/Room";
const RoomsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 90vh;
  height: 100%;
  width: 100%;
`;

function Server() {
  let params = useParams();

  return (
    <Container>
      <Title>Server {params?.serverName}</Title>
      <RoomsContainer>
        {params?.server?.rooms?.map((room) => {
          return <Room room={room} />;
        })}
      </RoomsContainer>
    </Container>
  );
}

export default Server;
