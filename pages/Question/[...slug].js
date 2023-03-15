import Head from "next/head";
import HTMLReactParser from "html-react-parser";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import {
  HtmlToPlain,
  GetStyle,
  GetDate,
  isUrdu,
} from "@/lib/univ-functions-server";

import SendRequest from "@/lib/sendRequest";
const noto = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ["arabic"],
});

export default function Question({ data }) {
  const { res, res2, slug } = data;
  //   console.log(res, res2, slug);

  const LoadedQuestion = res.question.question;
  const AuthorInfo = res2;

  return (
    <>
      <Head>
        <title>{`${LoadedQuestion.title}`}</title>
        <meta
          name="description"
          content={`${HtmlToPlain(LoadedQuestion.question[0])}`}
        />
        <meta itemprop="name" content={`${LoadedQuestion.title}`} />
        <meta
          itemprop="description"
          content={`${HtmlToPlain(LoadedQuestion.question[0])}`}
        />
        <meta
          itemprop="image"
          content={`https://al-mawrid.net/FileUploadSys/uploads/sawalojawab.jpeg`}
        />
        <meta
          property="og:url"
          content={`https://questons.al-mawrid.org/quesstion/${slug[0]}/${slug[1]}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${LoadedQuestion.title}`} />
        <meta
          property="og:description"
          content={`${HtmlToPlain(LoadedQuestion.question[0])}`}
        />
        <meta
          property="og:image"
          content={`https://al-mawrid.net/FileUploadSys/uploads/sawalojawab.jpeg`}
        />
        <meta
          name="twitter:card"
          content="https://al-mawrid.net/FileUploadSys/uploads/sawalojawab.jpeg"
        />
        <meta name="twitter:title" content={`${LoadedQuestion.title}`} />
        <meta
          name="twitter:description"
          content={`${HtmlToPlain(LoadedQuestion.question[0])}`}
        />
        <meta
          name="twitter:image"
          content="https://al-mawrid.net/FileUploadSys/uploads/sawalojawab.jpeg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${
          LoadedQuestion.question_lang === "ur" && noto.className
        } rounded-md shadow-md  p-2 mt-10 bg-gray-300`}
      >
        <div
          className="flex"
          style={{
            direction: `${
              LoadedQuestion.question_lang === "ur" ? "rtl" : "ltr"
            }`,
          }}
        >
          <div className="w-full md:w-2/3 p-6">
            <div className={`QuestionTitle ${GetStyle(LoadedQuestion.title)}`}>
              <p className="text-4xl leading-10">{LoadedQuestion.title}</p>
              <p className="text-md text-right">
                {GetDate(LoadedQuestion.entry_date)}
              </p>
            </div>
            <br />

            <div className="Question">
              {LoadedQuestion.question_lang === "ur" ? (
                <h3 className="text-2xl">سوال :</h3>
              ) : (
                <h3 className="text-2xl">Question :</h3>
              )}
              <br />
              <div className="leading-10">
                {LoadedQuestion.question[0] !== "" &&
                  HTMLReactParser(`${LoadedQuestion.question[0]}`)}
                {LoadedQuestion.asker_name > 0 && (
                  <div>
                    {LoadedQuestion.question_lang === "ur" ? (
                      <div className="UrduMedium">
                        سائل : {LoadedQuestion.asker_name}
                      </div>
                    ) : (
                      <div>Asked By{LoadedQuestion.asker_name}</div>
                    )}
                  </div>
                )}
              </div>
              <hr />

              {LoadedQuestion.question_lang === "ur" ? (
                <h3 className="rtlStyle UrduMedium">جواب :</h3>
              ) : (
                <h3 className="ATitle">Answer :</h3>
              )}
              <br />
              <div
                className={`ABody 
            ${
              LoadedQuestion.question_lang === "ur"
                ? "rtlStyle UrduMedium"
                : "ltrStyle"
            } leading-10`}
              >
                {!!LoadedQuestion.answer[0] &&
                  HTMLReactParser(`${LoadedQuestion.answer[0]}`)}
              </div>

              {LoadedQuestion.question_lang === "ur" ? (
                <div
                  className="rtlStyle UrduMedium"
                  style={{ fontWeight: "100" }}
                >
                  مسئول :{HTMLReactParser(`${LoadedQuestion.answerer_name[0]}`)}
                </div>
              ) : (
                <div className="ATitle">
                  Answered By :{LoadedQuestion.answerer_name[0]}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/3 p-2">
            <p>
              <b>Tags</b>
            </p>
            <p>
              {LoadedQuestion.tags.map((tag, index) =>
                index === 0 ? (
                  <a
                    key={index}
                    href="/Questions/SearchByTags"
                    className="flex flex-row flex-wrap"
                  >
                    <span className="bubble ">{tag}</span>
                  </a>
                ) : (
                  <a key={index} href="/Questions/SearchByTags">
                    &nbsp;&nbsp;
                    <span className="bubble">{tag}</span>
                  </a>
                )
              )}
            </p>
            <div className="RelatedSection">
              {LoadedQuestion.relatedQs.length > 0 && (
                <>
                  <h4>Related Queries</h4>
                  {LoadedQuestion.relatedQs.map((Q, index) =>
                    HTMLReactParser(Q)
                  )}
                </>
              )}
              {LoadedQuestion.relatedQs.map((Title, index) => (
                <div key={index}>
                  <a
                    className={`${GetStyle100(Title.title)}`}
                    href={`/Question/${Title._id}/${Title.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {Title.title}
                  </a>
                  <br />
                </div>
              ))}
            </div>
            <br />
            <br />
            {LoadedQuestion.relatedVideos.length > 0 && (
              <div className="RelatedSection">
                <h4>Related Videos</h4>
                {LoadedQuestion.relatedVideos.map((Q, index) =>
                  HTMLReactParser(Q)
                )}
              </div>
            )}
          </div>
          <hr className="text-black" />
        </div>
        <div className="w-full py-5">
          <center>
            {LoadedQuestion.question_lang === "ur" ? (
              <h3 className="text-2xl">مزید سوالات جو ان سے پوچھے گئے</h3>
            ) : (
              <h3>Answered by this author</h3>
            )}
          </center>

          <div className="QPQuestionList row justify-evenly py-5">
            {!!AuthorInfo &&
              AuthorInfo.OtherAnswer.map((Quest, index) => (
                <a
                  key={index}
                  href={`/Question/${Quest._id}/${Quest.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className=" btn btn-ghost w-auto p-2 m-3 bg-gray-500 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
                >
                  {Quest.title}
                </a>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const qid = slug[0];

  const res = await SendRequest(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/getQuestionById?id=${qid}`
  );

  const res2 = await SendRequest(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}api/query/GetAuthorInfo?name=${res.question.question.answerer_name[0]}`
  );

  return {
    props: {
      data: { res, res2, slug },
    },
  };
}
