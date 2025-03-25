export const LiquidityMathABI = [
  {
    "type": "function",
    "name": "_getSwapAmounts",
    "inputs": [
      {
        "name": "_priceX96",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_feesToken0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_feesToken1",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_targetTokenRatio",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_sell0For1",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "_swapAmount0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_swapAmount1",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "_getSwapDirection",
    "inputs": [
      {
        "name": "_feesToken0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_feesToken1",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_targetTokenRatio",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "_getTargetAmounts",
    "inputs": [
      {
        "name": "_sqrtPriceX96",
        "type": "uint160",
        "internalType": "uint160"
      },
      {
        "name": "_tickLower",
        "type": "int24",
        "internalType": "int24"
      },
      {
        "name": "_tickUpper",
        "type": "int24",
        "internalType": "int24"
      }
    ],
    "outputs": [
      {
        "name": "_targetAmount0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_targetAmount1",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "_getTargetTokenRatio",
    "inputs": [
      {
        "name": "_targetAmount0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_targetAmount1",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "applySlippage",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "maxSlippage",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "minAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateRebalanceData",
    "inputs": [
      {
        "name": "pool",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tickLower",
        "type": "int24",
        "internalType": "int24"
      },
      {
        "name": "tickUpper",
        "type": "int24",
        "internalType": "int24"
      },
      {
        "name": "feesToken0",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "feesToken1",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "rebalanceData",
        "type": "tuple",
        "internalType": "struct RebalanceData",
        "components": [
          {
            "name": "swapAmount0",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "swapAmount1",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sell0For1",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "priceX96",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getZeroForOne",
    "inputs": [
      {
        "name": "tokenIn",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenOut",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "error",
    "name": "T",
    "inputs": []
  }
]