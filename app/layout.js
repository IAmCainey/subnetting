import { Inter } from "next/font/google";
import "./globals.css";

import TopNav from "./top-nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
