import Link from "next/link";
import getAllProducts from "../utils/products"

export default async function AllProducts() {
  const allProducts = await getAllProducts()
  console.log(allProducts);
  return (
    <>
      {
        allProducts.map(item => (
          <>
            <h2 key={item.id}>{item.id}. {item.title} </h2>
            <Link href={`/products/${item.id}`}>View Details</Link>
          </>
        ))
      }
    </>
  )
}