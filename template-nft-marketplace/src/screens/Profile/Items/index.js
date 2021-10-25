import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Items.module.sass";
import Card from "../../../components/Card";
import Loader from "../../../components/Loader";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { getUserNFTs } from "../../../utils/user";

const Items = ({ className, items }) => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    async function fetchData() {
      const nfts = await getUserNFTs(wallet?.publicKey);
      console.log({ nfts });
    }

    if (wallet) {
      fetchData();
    }
  }, [connection, wallet]);

  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
        {items.map((x, index) => (
          <Card className={styles.card} item={x} key={index} />
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Items;
