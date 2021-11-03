import { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Items.module.sass'
import Card from '../../../components/Card'
import Loader from '../../../components/Loader'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { getUserNFTs } from '../../../utils/user'

const Items = ({ className, items }) => {
  const { connection } = useConnection()
  const wallet = useAnchorWallet()
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const nfts = await getUserNFTs(wallet?.publicKey)
      console.log({ nfts })
      setNfts(nfts)
      setLoading(false)
    }

    if (wallet) {
      fetchData()
    }
  }, [connection, wallet])

  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
        {nfts.length > 0 &&
          nfts.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        {loading && <Loader className={styles.loader} />}
        {!loading && nfts.length === 0 && (
          <p className={styles.empty}>You don't have any NFTs.</p>
        )}
      </div>
    </div>
  )
}

export default Items
