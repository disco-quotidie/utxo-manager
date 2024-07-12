"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { connectUnisat, connectWizz, getInstalledWalletTypes, WalletOpCode, WalletTypes } from "@/utils/wallet-utils"

export default function WalletConnect() {

  const [dialogOpen, setDialogOpen] = useState(false)
  const [installedWalletTypes, setInstalledWalletTypes] = useState<string[]>([])

  useEffect(() => {
    const { opcode, result } = getInstalledWalletTypes()
    if (opcode === WalletOpCode.SUCCESS) {
      setInstalledWalletTypes(result)
    }
  }, [])

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} >Connect</Button>

      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose your wallet to continue.</DialogTitle>
            <DialogDescription>
              <div>
                {
                  installedWalletTypes.map((walletType: string, index: number) => (
                    walletType === WalletTypes.UnisatWallet ? (
                      <Button key={index} onClick={() => connectUnisat()} >Connect Unisat</Button>
                    ) : walletType === WalletTypes.XVerseWallet ? (
                      <Button key={index} onClick={() => alert("xverse")} >Connect XVerse</Button>
                    ) : walletType === WalletTypes.WizzWallet ? (
                      <Button key={index} onClick={() => connectWizz()} >Connect Wizz</Button>
                    ) : walletType === WalletTypes.OKXWallet ? (
                      <Button key={index} onClick={() => alert("okx")} >Connect OKX</Button>
                    ) : walletType === WalletTypes.HiroWallet ? (
                      <Button key={index} onClick={() => alert("hiro")} >Connect Hiro</Button>
                    ) : walletType === WalletTypes.MEWallet ? (
                      <Button key={index} onClick={() => alert("me")} >Connect ME</Button>
                    ) : walletType === WalletTypes.BinanceWallet ? (
                      <Button key={index} onClick={() => alert("binance")} >Connect Binance</Button>
                    ) : (<></>)
                  ))
                }
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}