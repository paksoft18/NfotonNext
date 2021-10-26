import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";

const Card = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.symbol === "green" },
              styles.category
            )}
          >
            {item.name}
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="heart" size="20" />
          </button>
          <button className={cn("button-small", styles.button)}>
            <span>List now</span>
            <Icon name="scatter-up" size="16" />
          </button>
        </div>
      </div>
      <Link className={styles.link} to={item.image}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.price}>{item.symbol}</div>
          </div>
          <div className={styles.line}>
            {/* <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" />
                </div>
              ))}
            </div> */}
            {/* <div className={styles.counter}>{item.counter}</div> */}
          </div>
        </div>
        {/* <div className={styles.foot}> */}
        {/* <div className={styles.status}> */}
        {/* <Icon name="candlesticks-up" size="20" /> */}
        {/* Highest bid <span>{item.highestBid}</span> */}
        {/* </div> */}
        {/* <div */}
        {/* className={styles.bid} */}
        {/* dangerouslySetInnerHTML={{ __html: item.bid }} */}
        {/* /> */}
        {/* </div> */}
      </Link>
    </div>
  );
};

export default Card;
