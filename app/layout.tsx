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

const baseUrl ='https://www.carletonblockchain.com';

export const metadata: Metadata = {
  title: "Carleton Blockchain",
  description: "Carleton's fastest growing student led blockchain organization!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/cublockchain1.ico",
    },
  ],
  openGraph: {
    title: "Carleton Blockchain",
    description: "Carleton's fastest growing student led blockchain organization!",
    url: "https://www.carletonblockchain.com",
    type: "website",
    siteName: "Carleton Blockchain",
    images: [
      {
        url: "https://www.carletonblockchain.com/cubanner.png",
        width: 1200,
        height: 630,
        alt: "Carleton Blockchain",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Carleton Blockchain",
    description: "Carleton's fastest growing student led blockchain organization!",
    images: ["https://www.carletonblockchain.com/cubanner.png"],
  },
  themeColor: "#B8C6E5",
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
