import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useDashboard } from "../../contexts/DashboardContext";
import { Button } from "../../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 600;
`;

function Home() {
  const navigate = useNavigate();

  // context api 기반 포켓몬 선택 상태 관리 -> redux toolkit 기반으로 대체
  // const { setSelectedPokemon } = useDashboard();

  // useEffect(() => {
  //   setSelectedPokemon([]);
  // }, []);

  return (
    <Container>
      <Title>Pokemon</Title>
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}

export default Home;
