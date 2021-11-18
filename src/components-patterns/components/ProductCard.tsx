import { createContext, useContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used inside ProductContext Provider"
    );
  }

  return context;
};

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
