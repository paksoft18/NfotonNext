import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WalletConnectionProvider from "./providers/WalletConnectionProvider.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

ReactDOM.render(
  <React.StrictMode>
    <WalletConnectionProvider>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
