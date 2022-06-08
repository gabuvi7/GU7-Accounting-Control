import styled from "@emotion/styled";

type GridPropTypes = {
  col?: number;
  sizeCol?: number;
  unitSize?: string;
  pos?: string;
  top?: string;
  alignY?: string;
  alignX?: string;
};

const Grid = styled("div")<GridPropTypes>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.col &&
    props.sizeCol &&
    `repeat(${props.col}, ${props.sizeCol || 1}${props.unitSize || "fr"});`};
  position: ${(props) => props.pos && props.pos};
  top: ${(props) => props.top && props.top};
  justify-content: ${(props) => props.alignX && props.alignX};
  align-items: ${(props) => props.alignY && props.alignY};
`;

export default Grid;
