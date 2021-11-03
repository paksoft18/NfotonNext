import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './Control.module.sass'
import Icon from '../Icon'

const Control = ({ className, item }) => {
  return (
    <div className={cn(styles.control, className)}>
      <div className={cn('container', styles.container)}>
        <Link href="/">
          <a className={cn('button-stroke button-small', styles.button)}>
            <Icon name="arrow-prev" size="10" />
            <span>Back to home</span>
          </a>
        </Link>
        <div className={styles.breadcrumbs}>
          {item.map((x, index) => (
            <div className={styles.item} key={index}>
              {x.url ? (
                <Link href={x.url}>
                  <a className={styles.link}>{x.title}</a>
                </Link>
              ) : (
                x.title
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Control
