import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { Navbar } from "./clientComponents.tsx";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Kang In Park",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex flex-col h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
