import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Navbar from "@/components/Navbar/Navbar";
import SendRequest from "@/lib/sendRequest";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ params }) {
  const { slug } = params;
  let LIMIT = 10;
  let SKIP = 10 * (parseInt(slug) - 1);

  const UrQuestions = await SendRequest(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/BrowseUrduQuestions?Limit=${LIMIT}&Skip=${SKIP}`,
    "GET",
    null,
    {
      "Content-Type": "application/json",
    }
  );

  return { props: { UrQuestions, SKIP } };
}

export default function BrowseUrduQuestions({ UrQuestions, SKIP }) {
  return (
    <>
      <Head>
        <title>Browse Urdu Questions|Al-Mawrid</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {UrQuestions && UrQuestions.question.length > 0 && (
          <QuestionCard UrQuestions={UrQuestions} SKIP={SKIP} />
        )}
      </main>
    </>
  );
}
