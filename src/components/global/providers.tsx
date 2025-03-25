import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { WagmiProvider } from 'wagmi';
import { Toaster } from "@/components/ui/toaster"
import { CustomizedRainbowProvider } from './customized-rainbow-provider';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is not defined');
}

export const config = getDefaultConfig({
  appName: 'Yild Finance',
  projectId,
  chains: [arbitrum, base],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomizedRainbowProvider>
            {mounted && children}
          </CustomizedRainbowProvider>
        </NextThemesProvider>
        <Toaster />
      </QueryClientProvider>
    </WagmiProvider>
  );
}