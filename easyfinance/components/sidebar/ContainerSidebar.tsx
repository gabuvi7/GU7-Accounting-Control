import styled from "@emotion/styled";

type ContainerProps = {
  type: string;
  open: boolean;
  screen: number;
};

const setContainerSidebarStyles = (screen: number) =>
  `display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 25px 47px 0px;
    gap: 43px;
    position: ${screen > 768 ? "relative" : "absolute"};
    width: 256px;
    height: 100vh;
    background: #ffffff;
    border-radius: 0px 26px 26px 0px;
    overflow-y: auto;
    transition: all 0.3s linear;
    `;

const ContainerSidebar = styled("nav")<ContainerProps>`
  ${(props) =>
    props.type === "sidebar" && setContainerSidebarStyles(props.screen)}
  ${(props) =>
    props.open
      ? "transform: translateX(0%);"
      : `transform: translateX(-100%);
        flex: 0;
       `}
`;

export default ContainerSidebar;
