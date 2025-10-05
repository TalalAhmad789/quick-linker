import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quick Linker – Shorten, Share & Track Your Links",
  description: "Quick Linker makes it simple to shorten long URLs into clean, shareable links. Boost your productivity with fast link shortening, custom aliases, and easy tracking. Perfect for businesses, creators, and anyone who wants smarter, simpler links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
