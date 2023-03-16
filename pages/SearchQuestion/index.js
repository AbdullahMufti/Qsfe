import Head from "next/head";
import Image from "next/image";
import logo512 from "./logo512.png";
import SearchBar from "./SearchBar";
export default function SearchQuestion() {
  return (
    <>
      <Head>
        <title>Search from Previously Asked Questions|Al-Mawrid</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  flex-col items-center justify-center bg-transparent mt-10">
        <div>
          <Image
            className="h-[70px] w-[70px]"
            src={logo512}
            height="50"
            width="50"
            alt="Al-Mawrid Logo"
          />
        </div>
        <SearchBar />
      </main>
    </>
  );
}
