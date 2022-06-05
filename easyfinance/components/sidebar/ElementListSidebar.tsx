import styled from "@emotion/styled";

const ElementListSidebar = styled.li`
  line-height: 2em;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 12px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: space-around;
  &:hover {
    background-color: #e4e3ff;
    & > span {
      color: #4c49ed;
    }
  }
`;

export default ElementListSidebar;
