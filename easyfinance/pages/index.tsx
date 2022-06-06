import styled from "@emotion/styled";
import Card from "components/Card";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  `;

  return (
    <HomeContainer>
      <Card />
    </HomeContainer>
  );
};

export default Home;
