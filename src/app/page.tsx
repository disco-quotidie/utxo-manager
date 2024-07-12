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
      <UTXOExplorer address={"bc1p3x6mf7mvsjm0tuppa9rv64866vaam0fy60hlns5r3hrx0p782gfs9555ey"} />
    </div>
  );
}
