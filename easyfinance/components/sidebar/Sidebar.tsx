/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import Label from "components/Label";
import ElementListSidebar from "./ElementListSidebar";
import ListSidebar from "./ListSidebar";
import BurgerSidebar from "./BurgerSidebar";

type ElementListType = {
  icon: string;
  iconName: string;
  description: string;
  href: string;
};

const Sidebar: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const router = useRouter();

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

  const handleClickItem = (href: string) => (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <BurgerSidebar
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={onToggle}
        open={isOpen}
      >
        <span />
        <span />
        <span />
      </BurgerSidebar>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
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
          </DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default React.memo(Sidebar);
