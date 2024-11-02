import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";

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

export const metadata: Metadata = {
  title: "Carleton Blockchain",
  description: "Carleton's fastest growing student led blockchain organization!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/cublockchain1.png",
    },
  ],
  openGraph: {
    title: "Carleton Blockchain",
    description: "Carleton's fastest growing student led blockchain organization!",
    url: "https://www.carletonblockchain.com",
    type: "website",
    images: [
      {
        url: "www.carletonblockchain.com/cubanner.png",
        width: 1200,
        height: 630,
        alt: "Carleton Blockchain",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
