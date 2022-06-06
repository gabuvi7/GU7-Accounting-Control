import styled from "@emotion/styled";
import React from "react";

const NavigationSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  width: 206px;
  height: 815px;
`;

export default React.memo(NavigationSidebar);
