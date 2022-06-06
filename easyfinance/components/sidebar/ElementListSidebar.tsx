import styled from "@emotion/styled";
import React from "react";

type ElementListProps = {
  active: boolean;
};

const ElementListSidebar = styled("li")<ElementListProps>`
  line-height: 2em;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 12px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: space-around;
  background-color: ${(props) => props.active && "#e4e3ff"};
  & > span {
    color: ${(props) => props.active && "#4c49ed"};
  }
  &:hover {
    background-color: #e4e3ff;
    & > span {
      color: #4c49ed;
    }
  }
`;

export default React.memo(ElementListSidebar);
