export default async function getSingleProduct(productSlug) {
  let response = await fetch(`https://dummyjson.com/products/${productSlug}`)
  response = await response.json()
  return response
}