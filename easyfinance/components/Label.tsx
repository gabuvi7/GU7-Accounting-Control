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

const setPrimaryTextCard = () => `
font-family: "Rubik", sans-serif;
font-style: normal;
font-weight: 800;
font-size: 38px;
line-height: 54px;
color: #FFFFFF;
`;

const setSecondaryTextCard = () => `
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.17em;
    text-transform: uppercase;

    /* Main/White */

    color: #FFFFFF;

    opacity: 0.5;
    justify-content: center;
    display: flex;
`;

const setTitleTextCard = () => `
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 31px;

    /* Main/Black */

    color: #000000;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;`;

const selectTypeOfLabel: any = {
  sidebar: setLabelForSidebar(),
  primaryTextCard: setPrimaryTextCard(),
  secondaryTextCard: setSecondaryTextCard(),
  titleTextCard: setTitleTextCard(),
};

const Label = styled("span")<LabelProps>`
  ${(props) => props.type && selectTypeOfLabel[props.type]},
`;

export default Label;
