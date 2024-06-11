import { products } from "./utils/products";

export default function Home() {
  return (
    <>
      <ul>
        {products.map((item, index) =>
          <li key={index}>
              {item.brand}
          </li>
        )}
      </ul>
    </>
  )
}