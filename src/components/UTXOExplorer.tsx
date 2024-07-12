"use client"

import getUTXOsFromAddress from "@/utils/get-utxos-from-address"
import { useEffect, useState } from "react"
import UTXO from "./UTXO"

export default function UTXOExplorer({ address }: { address: string}) {

  const [utxos, setUtxos] = useState<any>([])

  useEffect(() => {
    const init = async () => {
      if (address) {
        const utxos = await getUTXOsFromAddress(address)
        setUtxos(utxos)
      }
    }
    init()
  }, [])
  
  return (
    <div>
      <div>
        ADDRESS: { address }
      </div>
      <div className="flex flex-col gap-20">
        {
          utxos.map((utxo: any, index: number) => (
            <UTXO key={`utxo_${index}`} data={utxo} />
          ))
        }
      </div>
    </div>
  )
}