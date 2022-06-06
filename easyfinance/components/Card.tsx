import styled from "@emotion/styled";

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

  return (
    <CardStyled>
      <span>card</span>
    </CardStyled>
  );
};

export default Card;
