import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veo",
  description: "VOting made easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <div className="flex flex-col items-center min-h-screen">
            <Header />
            <main className="flex flex-col px-4 mx-auto w-full">
              {children}
            </main>
            <footer className="absolute bottom-4">
              <span className="">&copy; 2025 All Rights Reserved</span>
            </footer>
          </div>
        </ReactQueryProvider>
        <ToastContainer hideProgressBar theme="light" />
      </body>
    </html>
  );
}
