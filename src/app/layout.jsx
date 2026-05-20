import { ToastContainer } from "react-toastify";
import { Inter, Montserrat } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "DREAMS RENT | Luxury Car Marketplace",
  description: "Experience luxury and performance with our curated selection of high-end vehicles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>

         <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </body>
    </html>
  );
}
