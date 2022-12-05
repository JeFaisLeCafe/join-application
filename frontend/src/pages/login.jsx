import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container, Button, Title, ErrorMessage } from "../Components/ui";
import usePostCredentials from "../services/usePostCredentials";

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  &::after {
  }
`;

const MyTextInput = styled.input`
  color: #2a8fb1;
  padding: 10px;
  border: solid 1px blue;
  width: 250px;
  border-radius: 6px;
`;

const Label = styled.p`
  color: lightgray;
`;

const Login = () => {
  const [username, setUsername] = useState("pierre");
  const [password, setPassword] = useState("@join");

  const { error, postCredentials } = usePostCredentials();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await postCredentials();

    if (!error) {
      navigate("/channels");
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Label>
          username:&nbsp;
          <MyTextInput
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          password:&nbsp;
          <MyTextInput
            value={password}
            type={"password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button onClick={handleSubmit}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
