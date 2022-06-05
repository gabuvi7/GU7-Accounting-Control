import styled from "@emotion/styled";

type ContainerProps = {
  type: string;
  open: boolean;
};

const setContainerSidebarStyles = () =>
  `display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 25px 47px 0px;
    gap: 43px;
    position: relative;
    width: 256px;
    height: 100vh;
    background: #ffffff;
    border-radius: 0px 26px 26px 0px;
    overflow-y: auto;
    transition: all 0.3s linear;
    `;

const ContainerSidebar = styled("div")<ContainerProps>`
  ${(props) => props.type === "sidebar" && setContainerSidebarStyles()}
  ${(props) =>
    props.open ? "transform: translateX(0%);" : "transform: translateX(-100%);"}
`;

export default ContainerSidebar;
