import styled from "@emotion/styled";
import Grid from "./Grid";
import Label from "./Label";

const Card = () => {
  const CardStyled = styled.div`
    max-width: 547.46px;
    min-width: 280px;
    width: 100%;
    height: 267.39px;

    background: #ffffff;
    box-shadow: 8px 13px 44px -6px #dfdbf7;
    border-radius: 20px;
  `;

  const ContainerCard = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    border-radius: inherit;
  `;

  const CircleCard = styled.div`
    height: 304px;
    width: 300px;
    left: 30%;
    top: -4%;
    background: #4c49ed;
    border-radius: 155px;
    position: relative;
  `;

  const ContentCircleCard = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 30%;
  `;

  return (
    <CardStyled>
      <ContainerCard>
        <Grid pos="relative" top="-5%" alignY="center">
          <Label type="titleTextCard">Total Ballance</Label>
        </Grid>
        <CircleCard>
          <ContentCircleCard>
            <Grid>
              <Label type="primaryTextCard">$200000</Label>
              <Label type="secondaryTextCard">wallets amount</Label>
            </Grid>
          </ContentCircleCard>
        </CircleCard>
      </ContainerCard>
    </CardStyled>
  );
};

export default Card;
