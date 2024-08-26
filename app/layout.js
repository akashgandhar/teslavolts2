import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/index.css";
import { DirectionAwareHoverDemo } from "./components/DirectionAwareHoverDemo";
import Footer from "./components/Footer";
import Video from "./components/Video";
import GoogleGeminiEffectDemo from "./components/GoogleGeminiEffectDemo";
import NavbarMain from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMain />
        {children}
        <GoogleGeminiEffectDemo />
        <Footer />
      </body>
    </html>
  );
}
