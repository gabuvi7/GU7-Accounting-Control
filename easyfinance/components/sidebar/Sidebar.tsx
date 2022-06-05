import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Label from "components/Label";
import useClickAwayListener from "hooks/useClickAwayListener";
import { useResizeScreen } from "hooks/useResizeScreen";
import ElementListSidebar from "./ElementListSidebar";
import ContainerSidebar from "./ContainerSidebar";
import NavigationSidebar from "./NavigationSidebar";
import ListSidebar from "./ListSidebar";
import BurgerSidebar from "./BurgerSidebar";

type ElementListType = {
  icon: string;
  iconName: string;
  description: string;
};

const Sidebar: NextPage = () => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const {
    screen: { sWidth },
  } = useResizeScreen();

  useClickAwayListener(wrapperRef, () => setOpen(false));

  const elements: ElementListType[] = [
    {
      icon: "material-symbols-rounded",
      iconName: "grid_view",
      description: "Dashboard",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "pie_chart",
      description: "Reports",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "paid",
      description: "Transactions",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "monitoring",
      description: "Investments",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "account_balance_wallet",
      description: "Wallets",
    },
  ];

  const Icon = styled.span`
    color: #a1a0bd;
  `;

  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen((prevState) => !prevState);
  };

  const openContainer = (): boolean => {
    let response: boolean = open;
    if (mounted && sWidth > 768) response = true;
    return response;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && sWidth < 768 && (
        <BurgerSidebar
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={handleOpen}
          open={open}
        >
          <span />
          <span />
          <span />
        </BurgerSidebar>
      )}
      <ContainerSidebar
        ref={wrapperRef}
        open={openContainer()}
        className="nav-container"
        type="sidebar"
      >
        <div>
          <Image
            src="/easyFinance-logo.svg"
            alt="EasyFinance Logo"
            width={250}
            height={160}
          />
        </div>
        <NavigationSidebar className="menu-items">
          <ListSidebar>
            {elements.map((item) => (
              <ElementListSidebar key={item.description}>
                <Icon className={item.icon}>{item.iconName}</Icon>
                <Label type="sidebar">{item.description}</Label>
              </ElementListSidebar>
            ))}
          </ListSidebar>
        </NavigationSidebar>
      </ContainerSidebar>
    </>
  );
};

export default Sidebar;
