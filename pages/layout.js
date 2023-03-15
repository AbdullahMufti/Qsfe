import "./globals.css";
import { Roboto } from "next/font/google";
import MainNavbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Al-Mawrid",
  description: "Welcome to Al-Mawrid",
};

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  ${roboto.className}  max-w-screen-lg mx-auto px-2 `}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
