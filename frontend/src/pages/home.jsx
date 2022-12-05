import { Container, Title, ErrorMessage } from "../Components/ui";
import useGetServers from "../services/useGetServers";
import ServerCard from "../Components/ServerCard";
const Home = () => {
  const { servers, error } = useGetServers();

  return (
    <Container>
      <Title>Servers</Title>

      {servers?.map((server) => {
        return <ServerCard key={server.id} server={server} />;
      })}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Home;
