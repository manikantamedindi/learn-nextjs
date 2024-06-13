import { products } from "./utils/products";
import Counter from "./components/counter";

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
      <hr />
      <Counter />
    </>
  )
}