"use client"
export default function UTXO({ key, data }: { key: string, data: any }) {

  const { status, txid, value, vout } = data
  const { confirmed, block_height } = status

  return (
    <div>
      <div>
        { txid }
      </div>
      <div>
        { value }
      </div>
      <div>
        { vout }
      </div>
      <div>
        { confirmed ? "confirmed" : "pending" }
      </div>
    </div>
  )
}