import styled from "@emotion/styled";

type LabelProps = {
  type?: string;
};

const setLabelForSidebar = () => `font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    color: #A1A0BD;
    width: 50%;
    `;

const Label = styled("span")<LabelProps>`
  ${(props) => props.type === "sidebar" && setLabelForSidebar()},
`;

export default Label;
