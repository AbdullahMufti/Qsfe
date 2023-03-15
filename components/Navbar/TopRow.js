import Link from "next/link";
import DropDowns from "./DropDowns";

export default function TopRow() {
  return (
    <>
      <DropDowns
        tabIndex={1}
        title="About"
        sublist={[
          ["About Us", "/AboutUs"],
          ["Message to Humanity", "/MessagetoHumanity"],
          ["Fellows", "/Fellows"],
          ["Associate Fellows", "/AssociateFellows"],
          ["Assistant Fellows", "/AssistantFellows"],
          ["Contact Us", "/ContactUs"],
        ]}
      />
      <DropDowns
        tabIndex={2}
        title="Read"
        sublist={[
          ["Quran", "https://javedahmedghamidi.org/#!/quran-home"],
          ["Books", "/Books"],
          ["Blogs", "https://javedahmedghamidi.org/#!/blog"],
          [
            ["Questions"],
            [500],
            [
              ["اردو سوالات", "/BrowseUrduQuestions/1"],
              ["English Questions", "/BrowseEnglishQuestions/1"],
              ["Browse Question", "/SearchQuestion"],
            ],
          ],
          [
            ["Journal"],
            [600],
            [
              ["Ishraq", "https://javedahmedghamidi.org/#!/ishraq"],
              ["Renaissance", "https://javedahmedghamidi.org/#!/renaissance"],
            ],
          ],
        ]}
      />
      <DropDowns
        tabIndex={3}
        title="Videos"
        sublist={[
          ["Videos", "https://www.javedahmedghamidi.org/#!/video"],
          ["Audios", "https://www.javedahmedghamidi.org/#!/audio"],
        ]}
      />
      <li>
        <Link href="AlMawridSociety">Al-Mawrid Society</Link>
      </li>
      <li>
        <Link href="AskQuestion">Ask a Question</Link>
      </li>
      <li></li>
    </>
  );
}
