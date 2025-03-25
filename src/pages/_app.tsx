import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { Providers } from '@/components/global/providers';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";
import { Cog, Fuel } from 'lucide-react';
import { ThemeSwitch } from '@/components/global/theme-switch';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yild Finance</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Yild Finance is an advanced DeFi platform that automates Uniswap V3 liquidity provision, optimizing yield strategies for effortless passive income. Maximize your earnings with automated LP management." />
        <meta property="og:image" content="/y.png" />
      </Head>
      <Providers>
        <div className={`flex flex-col min-h-screen bg-background font-kirsty`}>
          <header className="border-b">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className='flex flex-row gap-2'>
                <Link href="/" className="hover:cursor-pointer hidden md:block">
                  <div className=' flex flex-row gap-2 text-center items-center'>
                    <div style={{fontFamily: "giants", fontSize: "52px"}}>YILD</div>
                    <div className='font-kirsty pt-[12px] text-[24px] mx-auto w-full'>FINANCE</div>
                  </div>
                </Link>
                <Link href="/" className="hover:cursor-pointer block md:hidden">
                  <div className='relative flex flex-col gap-0 text-center'>
                    <div style={{fontFamily: "giants", fontSize: "32px", marginTop: "-16px"}}>YILD</div>
                    <div className='absolute bottom-[-8px] font-kirsty text-[16px] mx-auto w-full'>FINANCE</div>
                  </div>
                </Link>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Link href="/settings" >
                  <Button variant="outline" size="icon" ><Cog /></Button>
                </Link>
                <ThemeSwitch />
                <CustomWalletButton />
              </div>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Component {...pageProps} />
          </main>
          <footer className='mt-auto border-t'>
            <div className='container flex flex-row justify-between mx-auto my-4'>
              <Link href="/" className="hover:cursor-pointer">
                <div className='mx-4 mt-1'>
                  Yild Finance
                </div>
              </Link>
              <div className='flex flex-row gap-2 mx-4 items-center'>
                <Fuel size={18} />
                <span className='items-center mt-1'>
                  5 GWEI
                </span>
              </div>
            </div>
          </footer>
        </div>
      </Providers>
    </>
  );
}