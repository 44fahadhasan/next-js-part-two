import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// static meta data
export const metadata = {
  title: {
    default: "Only Root Page(Next Hero-Home)", // and jei shob page meta data set kora hoinai oi shob page ai ai default ta show korbe.
    template: "Show All Page(Next App) | %s", // %s mening dynamic
  },
  description: "Home page of the website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="min-h-[calc(100vh-368px)]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
