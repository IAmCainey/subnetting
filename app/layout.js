import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subnet Test App",
  description:
    "Generated IP address and CIDR notation for your subnet learning needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
