import { useProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useProductContext();

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
