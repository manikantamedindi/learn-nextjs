export default async function getAllProducts() {
  let response = await fetch("https://dummyjson.com/products")
  response = await response.json()
  return response.products
}