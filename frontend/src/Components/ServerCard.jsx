import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardDiv = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: solid #404eed 5px;
  border-radius: 10px;
`;
const ServerCard = ({ server }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/channels/${server.name}`, { server });
  }
  return (
    <CardDiv key={server.id} onClick={handleClick}>
      <p style={{ color: "white", fontSize: "25px" }}>{server.name}</p>;
    </CardDiv>
  );
};

export default ServerCard;
