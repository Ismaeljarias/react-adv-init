import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-style.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div>
        <ProductCard
          key={`${product.title} - ${product.id}`}
          product={product}
          initialValues={{
            count: 4,
            // maxCount: 10,
          }}>
          {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
