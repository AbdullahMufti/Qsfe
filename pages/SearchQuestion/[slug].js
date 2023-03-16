import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SendRequest from "@/lib/sendRequest";
import { useRouter } from "next/router";
import {
  GetDateHexa,
  GetDate,
  StyleRemover,
} from "../../lib/univ-functions-server";

import HTMLReactParser from "html-react-parser";
import SearchBar from "./SearchBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ params }) {
  let ParamQuery = params.slug;

  let Quest;
  try {
    Quest = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/SearchKeyword?kw=${ParamQuery}`
    );
  } catch (error) {
    console.log(error);
  }
  const Questions = await Quest.json();

  return { props: { Questions, ParamQuery } };
}

export default function BrowseEnglishQuestions({ Questions, ParamQuery }) {
  return (
    <>
      <Head>
        <title>Search Results |Al-Mawrid</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-7">
        <div className="text-xl">Search Results for : {ParamQuery}</div>
        <Link href="/SearchQuestion" className="float-right">
          Back To search
        </Link>
        {Questions && Questions.question.length > 0 && (
          <div className="mt-6">
            {Questions &&
              Questions.question.map((Question, index) => (
                <div className=" bg-gray-100 m-3 p-3 rounded-lg " key={index}>
                  <div className="">
                    <a
                      href={`/Question/${Question._id}/${Question.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h2 className="text-2xl font-bold"> {Question.title}</h2>
                      <div className="text-md p-3 inline-block">
                        {HTMLReactParser(
                          StyleRemover(Question.question[0].slice(0, 300))
                        )}
                      </div>
                    </a>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        )}
      </main>
    </>
  );
}
