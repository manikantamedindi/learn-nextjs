import { products } from "./utils/products";
import Counter from "./components/counter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <hr />
      <Counter />
      <br />
      <Link href='/products'>Products</Link>
    </>
  )
}