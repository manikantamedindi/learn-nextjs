import getSingleProduct from "@/app/utils/getSingleProduct"

export default async function product({ params }) {
  const getProduct = await getSingleProduct(params.productid)
  return (
    <>
      {getProduct.title}
    </>
  )
}