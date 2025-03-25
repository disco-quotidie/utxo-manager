export const VALID_FEE_TIERS = [100, 500, 3000, 10000]
export const INVALID_FEE_TIER = null

// export const SLIPPAGE = 5; // 5%
// export const BPS = 5; // 5%
export const TOKEN_LIVE_PRICE_FETCH_INTERVAL = 15000
export const USER_ERC_TOKEN_BALANCE_FETCH_INTERVAL = 15000
export const POSITION_INFO_FETCH_INTERVAL = 60000
export const POOL_DATA_FETCH_INTERVAL = 300000

export const BACKEND_API_URL = "https://api.yild.finance";
export const PARASWAP_API_URL = "https://api.paraswap.io/swap?version=6.2"
export const COINGECKO_PUBLIC_API_URL = "https://api.coingecko.com/api/v3"
export const UNISWAP_GITHUB_CLOUD_URL = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains"
export const TRUSTWALLET_GITHUB_CLOUD_URL = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains"
export const FALLBACK_ERC20_IMAGE_URL = "/favicon.png"

export const SUPPORTED_CHAINS = [
  {
    chainId: 42161,
    name: "arbitrum",
    secondaryRPC: "https://rpc.ankr.com/arbitrum",
    explorerURL: "https://arbiscan.io",
    positionManager: "0x0000000000000000000000000000000000000000" as `0x${string}`,
    liquidityMath: "0x0000000000000000000000000000000000000000" as `0x${string}`,
    uniswapFactory: "0x1F98431c8aD98523631AE4a59f267346ea31F984" as `0x${string}`,
    defaultTokens: [
      {
        name: "Wrapped ETH",
        symbol: "WETH",
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1" as `0x${string}`,
        decimals: 18
      },
      {
        name: "Arbitrum Token",
        symbol: "ARB",
        address: "0x912CE59144191C1204E64559FE8253a0e49E6548" as `0x${string}`,
        decimals: 18
      },
      {
        name: "USD Coin",
        symbol: "USDC",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831" as `0x${string}`,
        decimals: 6
      },    
      {
        name: "USD Tether",
        symbol: "USDT",
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9" as `0x${string}`,
        decimals: 6
      }
    ]
  },
  {
    chainId: 8453,
    name: "base",
    secondaryRPC: "https://rpc.ankr.com/base",
    explorerURL: "https://basescan.org",
    positionManager: "0x0115408f82c87322cb1f9ff54dd6c32ecb09fef7" as `0x${string}`,
    liquidityMath: "0x322CcFa790b6EF619E1fb69115E349D306DbA1A7" as `0x${string}`,
    uniswapFactory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD" as `0x${string}`,
    defaultTokens: [
      {
        name: "Wrapped ETH",
        symbol: "WETH",
        address: "0x4200000000000000000000000000000000000006" as `0x${string}`,
        decimals: 18,
        image: "/tokenIcons/weth.png"
      },
      {
        name: "USD Coin",
        symbol: "USDC",
        address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" as `0x${string}`,
        decimals: 6,
        image: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/base/assets/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913/logo.png"
      },
      {
        name: "Wrapped BTC",
        symbol: "WBTC",
        address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c" as `0x${string}`,
        decimals: 8,
        image: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
      },
      {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: "wstETH",
        address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/wsteth3_32.png"
      },
      {
        name: "USDS Stablecoin",
        symbol: "USDS",
        address: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc" as `0x${string}`,
        decimals: 18,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/assets/0x820C137fa70C8691f0e44Dc420a5e53c168921Dc/logo.png"
      },
      {
        name: "MANTRA",
        symbol: "OM",
        address: "0x3992B27dA26848C2b19CeA6Fd25ad5568B68AB98" as `0x${string}`,
        decimals: 18,
        image: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3593D125a4f7849a1B059E64F4517A86Dd60c95d/logo.png"
      },
      {
        name: "USDe",
        symbol: "USDe",
        address: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/ethenausde_32.png"
      },
      {
        name: "Dai Stablecoin",
        symbol: "DAI",
        address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb" as `0x${string}`,
        decimals: 18,
        image: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
      },
      {
        name: "Wrapped eETH",
        symbol: "weETH.base",
        address: "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/etherfiweeth_32.png"
      },
      {
        name: "Aave Token",
        symbol: "AAVE",
        address: "0x63706e401c06ac8513145b7687A14804d17f814b" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/aave_32.svg"
      },
      {
        name: "Coinbase Wrapped BTC",
        symbol: "cbBTC",
        address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf" as `0x${string}`,
        decimals: 8,
        image: "https://basescan.org/token/images/cbbtc_32.png"
      },
      {
        name: "ENA",
        symbol: "ENA",
        address: "0x58538e6A46E07434d7E7375Bc268D3cb839C0133" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/ethena_32.png"
      },
      {
        name: "Curve DAO Token",
        symbol: "CRV",
        address: "0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415" as `0x${string}`,
        decimals: 18,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/assets/0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415/logo.png"
      },
      {
        name: "Pyth Network",
        symbol: "PYTH",
        address: "0x4c5d8A75F3762c1561D96f177694f67378705E98" as `0x${string}`,
        decimals: 6,
        image: "https://basescan.org/token/images/pythnetwork_32.png"
      },
      {
        name: "Virtual Protocol",
        symbol: "VIRTUAL",
        address: "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b" as `0x${string}`,
        decimals: 18,
        image: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/assets/0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b/logo.png"
      },
      {
        name: "Aerodrome",
        symbol: "AERO",
        address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/aerodrome_32.png"
      },
      {
        name: "Pendle",
        symbol: "PENDLE",
        address: "0xa99f6e6785da0f5d6fb42495fe424bce029eeb3e" as `0x${string}`,
        decimals: 18,
        image: "https://basescan.org/token/images/pendlefin_32.png"
      }
    ]
  }
]

export const getNetworkNameFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["name"] : "base"
}

export const getSecondaryRPCFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["secondaryRPC"] : "https://rpc.ankr.com/base"
}

export const getExplorerURLFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["explorerURL"] : "https://basescan.org"
}

export const getUniswapV3FactoryContractAddressFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["uniswapFactory"] : "0x"
}

export const getManagerContractAddressFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["positionManager"] : "0x"
}

export const getLiquidityMathContractAddressFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["liquidityMath"] : "0x"
}

export const getDefaultTokensFromChainId = (chainId: number) => {
  const filtered = SUPPORTED_CHAINS.filter((elem: any) => elem.chainId === chainId)
  return filtered && filtered.length > 0 ? filtered[0]["defaultTokens"] : []
}

export interface ERC20TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  address: `0x${string}`;
  image?: string;
}
