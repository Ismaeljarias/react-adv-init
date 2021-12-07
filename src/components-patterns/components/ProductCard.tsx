import { createContext, useContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, ProductCardHandlers } from "../interfaces/interfaces";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          reset,
          product,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
