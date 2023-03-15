import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Al-Mawird Question & Answers</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`  ${roboto.className}  max-w-screen-lg mx-auto px-2 `}>
        Welcome To Questions & Answer Section
      </main>
    </>
  );
}
