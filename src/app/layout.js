import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyundai | Bangladesh",
  description: "Hyundai Bangladesh | &raquo; Comments Feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          <Navbar/>
        {children}
        <Footer/>
            
        <ScrollTop/>
        </body>
    </html>
  );
}
