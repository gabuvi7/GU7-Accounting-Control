/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  href: string;
};

const Sidebar: NextPage = () => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const {
    screen: { sWidth },
  } = useResizeScreen();

  useClickAwayListener(wrapperRef, () => setOpen(false));

  const elements: ElementListType[] = [
    {
      icon: "material-symbols-rounded",
      iconName: "grid_view",
      description: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "pie_chart",
      description: "Reports",
      href: "/reports",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "paid",
      description: "Transactions",
      href: "/transactions",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "monitoring",
      description: "Investments",
      href: "/investments",
    },
    {
      icon: "material-symbols-rounded",
      iconName: "account_balance_wallet",
      description: "Wallets",
      href: "/wallets",
    },
  ];

  const Icon = styled("span")`
    color: #a1a0bd;
  `;

  const ContainerLogo = styled.div`
    cursor: pointer;
  `;

  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen((prevState) => !prevState);
  };

  const openContainer = useCallback((): boolean => {
    let response: boolean = open;
    if (mounted && sWidth > 768) response = true;
    return response;
  }, [open, mounted, sWidth]);

  const handleClickItem = (href: string) => (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && sWidth <= 768 && (
        <div>
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
        </div>
      )}
      <ContainerSidebar
        ref={wrapperRef}
        open={openContainer()}
        type="sidebar"
        screen={sWidth}
      >
        <ContainerLogo>
          <Link href="/">
            <a>
              <Image
                src="/easyFinance-logo.svg"
                alt="EasyFinance Logo"
                width={250}
                height={160}
              />
            </a>
          </Link>
        </ContainerLogo>
        <NavigationSidebar className="menu-items">
          <ListSidebar>
            {elements.map((item) => (
              <ElementListSidebar
                key={item.description}
                active={router.asPath === item.href}
                onClick={handleClickItem(item.href)}
              >
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

export default React.memo(Sidebar);
