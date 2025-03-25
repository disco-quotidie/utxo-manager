export const PositionManagerABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_defaultAccountingUnit",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_nonfungiblePositionManagerAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_uniswapRouter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_paraswapRouter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_uniswapV3factory",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_paraswapSwapManager",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_uniswapV3SwapManager",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_feeRecipientAddress",
        "type": "address",
        "internalType": "address"
      },
      { "name": "_protocolFee", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "accountingUnit",
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "admins",
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "allTransfersApproved",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approvePositionTransfers",
    "inputs": [
      {
        "name": "_tokenIds",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      { "name": "_approved", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closePosition",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
      { "name": "_pSwapData0", "type": "bytes", "internalType": "bytes" },
      { "name": "_pSwapData1", "type": "bytes", "internalType": "bytes" },
      {
        "name": "_minAmountOut0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minAmountOut1",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token0MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token1MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      { "name": "_amount0", "type": "uint256", "internalType": "uint256" },
      { "name": "_amount1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "collectFees",
    "inputs": [
      { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "feesToken0", "type": "uint256", "internalType": "uint256" },
      { "name": "feesToken1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "compoundPosition",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
      { "name": "_pSwapData0", "type": "bytes", "internalType": "bytes" },
      { "name": "_pSwapData1", "type": "bytes", "internalType": "bytes" },
      {
        "name": "_minAmountOut0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minAmountOut1",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token0MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token1MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      { "name": "_feesToken0", "type": "uint256", "internalType": "uint256" },
      { "name": "_feesToken1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "decreaseLiquidity",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_amountInBPS",
        "type": "uint128",
        "internalType": "uint128"
      },
      { "name": "_pSwapData0", "type": "bytes", "internalType": "bytes" },
      { "name": "_pSwapData1", "type": "bytes", "internalType": "bytes" },
      {
        "name": "_minAmountOut0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minAmountOut1",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token0MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token1MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      { "name": "_amount0", "type": "uint256", "internalType": "uint256" },
      { "name": "_amount1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "defaultAccountingUnit",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "feeRecipientAddress",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPositionInfo",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "token0", "type": "address", "internalType": "address" },
      { "name": "token1", "type": "address", "internalType": "address" },
      { "name": "token0Decimals", "type": "uint8", "internalType": "uint8" },
      { "name": "token1Decimals", "type": "uint8", "internalType": "uint8" },
      { "name": "feesEarned0", "type": "uint256", "internalType": "uint256" },
      { "name": "feesEarned1", "type": "uint256", "internalType": "uint256" },
      {
        "name": "protocolFee0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "protocolFee1",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "principal0", "type": "uint256", "internalType": "uint256" },
      { "name": "principal1", "type": "uint256", "internalType": "uint256" },
      {
        "name": "ownerAccountingUnit",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "ownerAccountingUnitDecimals",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "increaseLiquidity",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
      { "name": "_amountAdd0", "type": "uint256", "internalType": "uint256" },
      { "name": "_amountAdd1", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_token0MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_token1MaxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      { "name": "_liquidity", "type": "uint128", "internalType": "uint128" },
      { "name": "_amount0", "type": "uint256", "internalType": "uint256" },
      { "name": "_amount1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nonfungiblePositionManager",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract INonfungiblePositionManager"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openPosition",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct INonfungiblePositionManager.MintParams",
        "components": [
          { "name": "token0", "type": "address", "internalType": "address" },
          { "name": "token1", "type": "address", "internalType": "address" },
          { "name": "fee", "type": "uint24", "internalType": "uint24" },
          { "name": "tickLower", "type": "int24", "internalType": "int24" },
          { "name": "tickUpper", "type": "int24", "internalType": "int24" },
          {
            "name": "amount0Desired",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amount1Desired",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amount0Min",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amount1Min",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          { "name": "deadline", "type": "uint256", "internalType": "uint256" }
        ]
      },
      { "name": "owner", "type": "address", "internalType": "address" }
    ],
    "outputs": [
      { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
      { "name": "liquidity", "type": "uint128", "internalType": "uint128" },
      { "name": "amount0", "type": "uint256", "internalType": "uint256" },
      { "name": "amount1", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "owners",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "protocolFee",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "routers",
    "inputs": [],
    "outputs": [
      {
        "name": "uniswapRouter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "paraswapRouter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "uniswapV3factory",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "paraswapSwapManager",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "uniswapV3SwapManager",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setAccountingUnit",
    "inputs": [
      {
        "name": "_accountingUnit",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAdmin",
    "inputs": [
      { "name": "_admin", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAllTransfersApproved",
    "inputs": [
      { "name": "_approved", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDefaultAccountingUnit",
    "inputs": [
      {
        "name": "_defaultAccountingUnit",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setFeeRecipientAddress",
    "inputs": [
      {
        "name": "_feeRecipientAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setProtocolFee",
    "inputs": [
      { "name": "_protocolFee", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferApproved",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferPosition",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
      { "name": "_newOwner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AdminStatusChanged",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "status",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AllTransfersApprovalSet",
    "inputs": [
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FeesCollected",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionClosed",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionCompounded",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionDecreased",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "liquidity",
        "type": "uint128",
        "indexed": false,
        "internalType": "uint128"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionIncreased",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "liquidity",
        "type": "uint128",
        "indexed": false,
        "internalType": "uint128"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionOpened",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "pool",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "amount0",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount1",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "tickLower",
        "type": "int24",
        "indexed": false,
        "internalType": "int24"
      },
      {
        "name": "tickUpper",
        "type": "int24",
        "indexed": false,
        "internalType": "int24"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionTransferred",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "oldOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferApprovalSet",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "DeadlineExpired",
    "inputs": [
      { "name": "deadline", "type": "uint256", "internalType": "uint256" },
      { "name": "timestamp", "type": "uint256", "internalType": "uint256" }
    ]
  },
  {
    "type": "error",
    "name": "EmptyContract",
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }]
  },
  {
    "type": "error",
    "name": "InvalidAmounts",
    "inputs": [
      {
        "name": "amount0Desired",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount1Desired",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "InvalidBpsAmount",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }]
  },
  { "type": "error", "name": "InvalidPool", "inputs": [] },
  {
    "type": "error",
    "name": "InvalidRecipient",
    "inputs": [
      { "name": "expected", "type": "address", "internalType": "address" },
      { "name": "received", "type": "address", "internalType": "address" }
    ]
  },
  {
    "type": "error",
    "name": "InvalidTickRange",
    "inputs": [
      { "name": "tickLower", "type": "int24", "internalType": "int24" },
      { "name": "tickUpper", "type": "int24", "internalType": "int24" }
    ]
  },
  {
    "type": "error",
    "name": "InvalidTickSpacing",
    "inputs": [
      { "name": "tickLower", "type": "int24", "internalType": "int24" },
      { "name": "tickUpper", "type": "int24", "internalType": "int24" },
      { "name": "spacing", "type": "int24", "internalType": "int24" }
    ]
  },
  { "type": "error", "name": "T", "inputs": [] },
  {
    "type": "error",
    "name": "TransferLocked",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }]
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": [
      { "name": "caller", "type": "address", "internalType": "address" }
    ]
  }
]