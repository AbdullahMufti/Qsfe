"use client";
import { GetDateHexa, GetDate, StyleRemover } from "../../lib/univ-functions";
import { Link } from "next/link";
import HTMLReactParser from "html-react-parser";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { useRouter } from "next/router";

export default function QuestionCard({ UrQuestions, SKIP }) {
  const Next = parseInt(SKIP) + 1;
  const Prev = parseInt(SKIP) - 1;

  const router = useRouter();

  const MoveFwd = (e) => {
    e.preventDefault();
    router.push(`/BrowseUrduQuestions/${Next}`);
  };
  const MoveBack = (e) => {
    e.preventDefault();
    router.push(`/BrowseUrduQuestions/${Prev}`);
  };

  // console.log(Next, Prev);
  return (
    <div>
      {UrQuestions.question.map((Question, index) => (
        <div className={` bg-gray-300 m-3 p-3 rounded-lg`} key={index}>
          <div className="text-bold">{GetDate(Question.entry_date)}</div>
          <div className="text-right">
            <a
              href={`/Question/${Question._id}/${Question.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className="text-2xl font-bold"> {Question.title}</h2>
              <div className="text-md p-3 inline-block leading-10	">
                {HTMLReactParser(
                  StyleRemover(Question.question[0].slice(0, 300))
                )}
              </div>
            </a>
          </div>
          <hr />
          <div className="text">
            <span className="font-bold">{Question.answerer_name[0]}</span>
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {parseInt(SKIP) + 1}
          </span>
          &nbsp; to&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {parseInt(SKIP) + 10}
          </span>
          &nbsp; of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {UrQuestions && UrQuestions.totalQuestion}
          </span>
          &nbsp; Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={(e) => MoveBack(e)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button
            onClick={(e) => MoveFwd(e)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
