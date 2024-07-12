export const WalletTypes = {
  WizzWallet: "wizz",
  UnisatWallet: "unisat",
  OKXWallet: "okx",
  HiroWallet: "hiro",
  MEWallet: "me",
  XVerseWallet: "xverse",
  BinanceWallet: "binance",
}

export const WalletOpCode = {
  SUCCESS: "success",
  NoBrowser: "no-browser",
  NoWalletFound: "no-wallet-found",
  NotConnected: "not-connected",
  NoWizzWallet: "no-wizz-wallet",
  NotEnoughFund: "not-enough-fund",
  UserRejected: "user-rejected",
  UnknownError: "unknown-error",
}

export const getInstalledWalletTypes = () => {
  if (!window || typeof window === "undefined") {
    return {
      opcode: WalletOpCode.NoBrowser,
      result: []
    }
  }

  let result = []
  if (window.wizz && typeof window.wizz !== "undefined")
    result.push(WalletTypes.WizzWallet)

  if (window.unisat && typeof window.unisat !== "undefined")
    result.push(WalletTypes.UnisatWallet)

  if (window.okxwallet && typeof window.okxwallet !== 'undefined')
    result.push(WalletTypes.OKXWallet)

  if (result.length === 0)
    return {
      opcode: WalletOpCode.NoWalletFound,
      result
    }

  return {
    opcode: WalletOpCode.SUCCESS,
    result
  }
}

export const getConnectedWallet = async () => {

  const { opcode, result: installedWalletTypes } = getInstalledWalletTypes()

  if (opcode !== WalletOpCode.SUCCESS)
    return {
      opcode,
      result: []
    }
  
  for (const i in installedWalletTypes) {
    const type = installedWalletTypes[i]
    try {
      if (type === WalletTypes.WizzWallet) {
        const result: string[] = await window.wizz.getAccounts()
        if (result && result.length > 0)
          return {
            opcode: WalletOpCode.SUCCESS,
            type: WalletTypes.WizzWallet,
            primary_address: result[0]
          }
      }
      if (type === WalletTypes.UnisatWallet) {
        const result: string[] = await window.unisat.getAccounts()
        if (result && result.length > 0)
          return {
            opcode: WalletOpCode.SUCCESS,
            type: WalletTypes.UnisatWallet,
            primary_address: result[0]
          }
      }
      if (type === WalletTypes.UnisatWallet) {
        const result = await window.okxwallet.bitcoin.getAccounts()
        if (result && result.length > 0)
        return {
          opcode: WalletOpCode.SUCCESS,
          type: WalletTypes.OKXWallet,
          primary_address: result[0]
        }
      }  
    } catch (error) {
      console.log(error)
    }
  }
  return {
    opcode: WalletOpCode.UnknownError,
    type: "",
    primary_address: ""
  }
}

export const signPsbt = async (psbt: any) => {

  const { opcode, type, primary_address } = await getConnectedWallet()

  if (opcode !== WalletOpCode.SUCCESS || !type || !primary_address)
    return {
      opcode,
      result: ""
    }

  try {
    if (type === WalletTypes.WizzWallet) {
      const result = await window.wizz.signPsbt(psbt)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
    if (type === WalletTypes.UnisatWallet) {
      const result = await window.unisat.signPsbt(psbt)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
    if (type === WalletTypes.OKXWallet) {
      const result = await window.okxwallet.bitcoin.signPsbt(psbt)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    opcode: WalletOpCode.UnknownError,
    result: ""
  }
}

export const pushPsbt = async (psbtHex: any) => {

  const { opcode, type, primary_address } = await getConnectedWallet()

  if (opcode !== WalletOpCode.SUCCESS || !type || !primary_address)
    return {
      opcode,
      result: ""
    }

  try {
    if (type === WalletTypes.WizzWallet) {
      const result = await window.wizz.pushPsbt(psbtHex)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
    if (type === WalletTypes.UnisatWallet) {
      const result = await window.unisat.pushPsbt(psbtHex)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
    if (type === WalletTypes.OKXWallet) {
      const result = await window.okxwallet.bitcoin.pushPsbt(psbtHex)
      if (result)
        return {
          opcode: WalletOpCode.SUCCESS,
          result
        }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    opcode: WalletOpCode.UnknownError,
    result: ""
  }
}

export const connectWizz = async () => {
  if (typeof window !== 'undefined' && window.wizz) {
    const result: string[] = await window.wizz.requestAccounts();
    if (result.length > 0) {
      // setWalletData({
      //   ...walletData,
      //   type: "wizz",
      //   connected: true,
      //   primary_addr: result[0],
      // });
      console.log(result)
    }
  }
}

export const connectUnisat = async () => {
  if (typeof window !== 'undefined' && window.unisat) {
    const result: string[] = await window.unisat.requestAccounts();
    if (result.length > 0) {
      // setWalletData({
      //   ...walletData,
      //   type: "unisat",
      //   connected: true,
      //   primary_addr: result[0],
      // });
      console.log(result)
    }
  }
}