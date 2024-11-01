import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
}); 
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SupportHaven", 
  description:
    "SupportHive is a platform where fans can directly support their favorite creators by contributing funds. It fosters a vibrant community, enabling influencers to create authentic content while building stronger connections with their supporters. Join today to empower creators and be part of their journey!",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white"
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}







