// eslint-disable-next-line import/no-unresolved
import Sidebar from "components/sidebar/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>EasyFinance</title>
      <meta name="description" content="EasyFinance" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Sidebar />
    </main>

    <footer className={styles.footer}>a</footer>
  </div>
);

export default Home;
