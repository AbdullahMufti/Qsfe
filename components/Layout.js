import { Inter, Roboto } from "next/font/google";
import Navbar from "./Navbar/Navbar";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`  ${roboto.className}  max-w-screen-lg mx-auto px-2 `}>
        {children}
      </main>
    </>
  );
}
