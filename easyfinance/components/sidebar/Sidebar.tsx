import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import styled from "@emotion/styled";

const Sidebar: NextPage = () => {
  useEffect(() => {}, []);

  const ContainerSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 25px 47px 0px;
    gap: 43px;
    position: relative;
    width: 256px;
    height: 100vh;
    background: #ffffff;
    border-radius: 0px 26px 26px 0px;
  `;

  const NavigationSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;

    width: 206px;
    height: 815px;
  `;

  const ListSidebar = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 22px;
    width: 206px;
    height: 376px;
    list-style: none;
  `;

  const ElementListSidebar = styled.li`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #4c49ed;
  `;

  return (
    <ContainerSidebar>
      <Image
        src="/easyFinance-logo.svg"
        alt="EasyFinance Logo"
        width={250}
        height={160}
      />
      <NavigationSidebar>
        <ListSidebar>
          <ElementListSidebar>Dashboard</ElementListSidebar>
          <ElementListSidebar>Reports</ElementListSidebar>
          <ElementListSidebar>Transactions</ElementListSidebar>
          <ElementListSidebar>Investments</ElementListSidebar>
          <ElementListSidebar>Wallets</ElementListSidebar>
        </ListSidebar>
      </NavigationSidebar>
    </ContainerSidebar>
  );
};

export default Sidebar;
