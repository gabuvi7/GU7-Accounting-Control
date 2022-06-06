import styled from "@emotion/styled";
import React from "react";

const ListSidebar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 22px;
  width: 206px;
  height: 376px;
  list-style: none;
`;

export default React.memo(ListSidebar);
