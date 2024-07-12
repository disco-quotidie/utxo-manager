import UTXOExplorer from "@/components/UTXOExplorer";
import WalletConnect from "@/components/WalletConnect";

declare global {
  interface Window {
    wizz: any;
    unisat: any;
    okxwallet: any;
  }
}

export default function Home() {
  return (
    <div>
      <WalletConnect />
      <UTXOExplorer address={"bc1qh2khfmdnaxaat7l7dk4ev5lxz48a8sjzee0cn2"} />
    </div>
  );
}
