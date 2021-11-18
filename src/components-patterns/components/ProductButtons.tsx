import { useProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useProductContext();

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        disabled={counter <= 0 ? true : false}
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
