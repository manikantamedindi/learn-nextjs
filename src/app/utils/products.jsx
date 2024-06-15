export default async function Products() {
  const response = await fetct("https://dummyjson.com/products")
  let data = await response.json();
  console.log(data)
}