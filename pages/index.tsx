import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chart Bell - Home</title>
        <meta
          name="description"
          content="Stock news, alerts, futures, and options"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
