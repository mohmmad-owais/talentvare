import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

const neueHassDisplayPro = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayRegular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Talentvare",
  description: "Job Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${neueHassDisplayPro.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
