import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }: { children: any }) => (
  <div className={styles.container}>
    <Head>
      <title>EasyFinance</title>
      <meta name="description" content="EasyFinance" />
      <link rel="icon" href="/easyFinance-logo.svg" />
    </Head>
    <Sidebar />
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
