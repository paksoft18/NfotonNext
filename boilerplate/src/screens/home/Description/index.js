import cn from 'classnames'
import Link from 'next/link'
import styles from './Description.module.sass'
import Image from '../../../components/Image'

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>Save your time with Stacks</div>
          <h1 className={cn('h1', styles.title)}>
            Earn free crypto with foton
          </h1>
          <div className={styles.text}>
            A creative agency that lead and inspire
          </div>
          <div className={styles.btns}>
            <Link href="/upload-variants">
              <a className={cn('button', styles.button)}>Create item</a>
            </Link>
            <Link href="/search01">
              <a className={cn('button-stroke', styles.button)}>
                Discover more
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cubes@2x.png 2x"
              srcSetDark="/images/content/cubes-dark@2x.png 2x"
              src="/images/content/cubes.png"
              srcDark="/images/content/cubes-dark.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cube@2x.png 2x"
              srcSetDark="/images/content/cube-dark@2x.png 2x"
              src="/images/content/cube.png"
              srcDark="/images/content/cube-dark.png"
              alt="Cube"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
