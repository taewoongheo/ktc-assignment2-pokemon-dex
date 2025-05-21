import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 600;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Pokemon</Title>
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}

export default Home;
