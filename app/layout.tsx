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
  openGraph: {
    title: "Carleton Blockchain",
    description: "Carleton's fastest growing student led blockchain organization!",
    url: 'https://www.carletonblockchain.com',
    siteName: 'Carleton Blockchain',
    images: [
      {
        url: '/cubanner.png',  //(1200x630 recommended)
        width: 1200,
        height: 630,
        alt: 'Carleton Blockchain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: {
      url: '/cublockchain1.png',
      sizes: '200x200',
    },
    shortcut: '/cublockchain1.png',
    apple: {
      url: '/cublockchain1.png',
      sizes: '200x200',
    },
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
