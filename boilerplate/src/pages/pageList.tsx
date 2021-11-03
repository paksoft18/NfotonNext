import Link from 'next/link'
import cn from 'classnames'
import styles from '../styles/pagesStyles/PageList.module.sass'

const PageList = () => {
  return (
    <div className={styles.page}>
      <div className={cn('container', styles.container)}>
        <p>
          <Link href="/">Home Page</Link>
        </p>
        <p>
          <Link href="/upload-variants">Upload Variants</Link>
        </p>
        <p>
          <Link href="/upload-details">Upload Details</Link>
        </p>
        <p>
          <Link href="/connect-wallet">Connect wallet</Link>
        </p>
        <p>
          <Link href="/faq">FAQ</Link>
        </p>
        <p>
          <Link href="/activity">Activity</Link>
        </p>
        <p>
          <Link href="/search01">Search01</Link>
        </p>
        <p>
          <Link href="/search02">Search02</Link>
        </p>
        <p>
          <Link href="/profile">Profile</Link>
        </p>
        <p>
          <Link href="/profile-edit">Profile Edit</Link>
        </p>
        <p>
          <Link href="/item">Item</Link>
        </p>
      </div>
    </div>
  )
}

export default PageList
