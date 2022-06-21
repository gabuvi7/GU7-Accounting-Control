import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Grid from "./Grid";
import Label from "./Label";

const Card = () => {
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
    <Box
      maxW="550px"
      minW="fit-content"
      bg="white"
      borderRadius="20px"
      overflow="hidden"
    >
      <ContainerCard>
        <Grid pos="relative" top="-5%" alignY="center">
          <Heading as="h3" size="lg">
            Total Ballance
          </Heading>
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
    </Box>
  );
};

export default Card;
