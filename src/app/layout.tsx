import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import { Fuel } from "lucide-react";

export const metadata: Metadata = {
  title: "UTXO MANAGER",
  description: "Made by lil love of Disco Quotidie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <title>UTXO MANAGER</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:image" content="/opengraph.png" />
      </Head>
      <body
        className={`font-kirsty antialiased`}
      >
        {children}
        <div className='mt-auto border-t'>
          <div className='container flex flex-row justify-between mx-auto my-4'>
            <Link href="/" className="hover:cursor-pointer">
              <div className='mx-4 mt-1'>
                UTXO MANAGER
              </div>
            </Link>
            <div className='flex flex-row gap-2 mx-4 items-center'>
              <Fuel size={18} />
              <span className='items-center mt-1'>
                4 sats/byte
              </span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
