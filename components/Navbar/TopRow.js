import Link from "next/link";
import DropDowns from "./DropDowns";

export default function TopRow() {
  return (
    <>
      <DropDowns
        tabIndex={1}
        title="About"
        sublist={[
          ["About Us", "https://al-mawrid.org/TheOrganisation"],
          ["Message to Humanity", "https://al-mawrid.org/OurMessage"],
          ["Fellows", "https://al-mawrid.org/Fellows"],
          ["Associate Fellows", "https://al-mawrid.org/Associate"],
          ["Assistant Fellows", "https://al-mawrid.org/Assistant"],
          ["Contact Us", "https://al-mawrid.org/ContactUs"],
        ]}
      />
      <DropDowns
        tabIndex={2}
        title="Read"
        sublist={[
          ["Quran", "https://javedahmedghamidi.org/#!/quran-home"],
          ["Books", "https://al-mawrid.org/Books"],
          ["Blogs", "https://javedahmedghamidi.org/#!/blog"],
          [
            ["Questions"],
            [500],
            [
              ["اردو سوالات", "/BrowseUrduQuestions/1"],
              ["English Questions", "/BrowseEnglishQuestions/1"],
              ["Search All Question", "/SearchQuestion"],
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
        <Link href="https://al-mawrid.org/AMSociety">Al-Mawrid Society</Link>
      </li>
      <li>
        <Link href="https://al-mawrid.org/auth">Ask a Question</Link>
      </li>
      <li></li>
    </>
  );
}
