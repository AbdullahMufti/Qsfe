import { Inter, Roboto } from "next/font/google";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className={`  ${roboto.className}  max-w-screen-lg min-h-screen mx-auto px-2 `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
