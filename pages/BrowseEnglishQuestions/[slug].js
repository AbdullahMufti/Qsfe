import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Questioncard from "./QuestionCard";
import Navbar from "@/components/Navbar/Navbar";
import SendRequest from "@/lib/sendRequest";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ params }) {
  let LIMIT = 10;
  let SKIP = 10 * (parseInt(params.slug) - 1);

  const EnQuestions = await SendRequest(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/BrowseEnglishQuestions?Limit=${LIMIT}&Skip=${SKIP}`,
    "GET",
    null,
    {
      "Content-Type": "application/json",
    }
  );

  return { props: { EnQuestions, SKIP } };
}

export default function BrowseEnglishQuestions({ EnQuestions, SKIP }) {
  return (
    <>
      <Head>
        <title>Browse English Questions|Al-Mawrid</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Questioncard EnQuestions={EnQuestions} SKIP={SKIP} />
      </main>
    </>
  );
}
