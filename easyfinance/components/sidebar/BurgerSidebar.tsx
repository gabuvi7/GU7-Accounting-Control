import styled from "@emotion/styled";

type BurgerSidebarProps = {
  primaryLight?: string;
  open: boolean;
};

const BurgerSidebar = styled("button")<BurgerSidebarProps>`
  position: absolute;
  top: 1%;
  left: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform: ${(props) =>
    !props.open ? "translateX(-10rem)" : "translateX(0)"};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) =>
      props.primaryLight ? props.primaryLight : "#a1a0bd"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    transform: ${(props) => (!props.open ? "translateX(0)" : "translateX(0)")};
    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default BurgerSidebar;
