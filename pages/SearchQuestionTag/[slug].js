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

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ params }) {
  let SearchedKeyword = params.slug;

  const Questions = await SendRequest(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/SearchKeyword?kw=${SearchedKeyword}`,
    "GET",
    null,
    {
      "Content-Type": "application/json",
    }
  );

  return { props: { Questions } };
}

export default function BrowseEnglishQuestions({ Questions }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Browse English Questions|Al-Mawrid</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {Questions && Questions.question.length > 0 && (
          <div>
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
