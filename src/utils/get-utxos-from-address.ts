import { MEMPOOL_API } from "./const";

export default async function getUTXOsFromAddress(address: string ) {
  const url = `${MEMPOOL_API}/address/${address}/utxo`
  try {
    const response = await fetch(url)
    if (response.ok) {
      const utxos = await response.json()
      return utxos
    }   
  } catch (error) {
    console.log(error)
  }
  return []
}