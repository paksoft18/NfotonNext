import {
  WalletDialogProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-material-ui";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
const Connect = () => {
  const wallet = useAnchorWallet();
  
  useEffect(() => {
    console.log(wallet?.publicKey.toBase58());
  }, [wallet]);

  return (
    <WalletDialogProvider>
      <WalletMultiButton
        style={{
          backgroundImage: "linear-gradient(to-r, #54F2F2, #8FF7A7)",
          borderRadius: "25px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      />
    </WalletDialogProvider>
  );
};

export default Connect;