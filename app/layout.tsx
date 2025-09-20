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
  title: "Ottawa Blockchain",
  description:
    "Ottawa's fastest growing student led blockchain organization!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/cublockchain1.ico",
    },
  ],
  openGraph: {
    title: "Ottawa Blockchain",
    description:
      "Ottawa's fastest growing student led blockchain organization!",
    url: "https://www.carletonblockchain.com",
    type: "website",
    siteName: "Ottawa Blockchain",
    images: [
      {
        url: "https://www.carletonblockchain.com/cubanner.png",
        width: 1200,
        height: 630,
        alt: "Ottawa Blockchain",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ottawa Blockchain",
    description:
      "Ottawa's fastest growing student led blockchain organization!",
    images: ["https://www.carletonblockchain.com/cubanner.png"],
  },
};

export const viewport = {
  themeColor: "#B8C6E5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        {children}
      </body>
    </html>
  );
}
