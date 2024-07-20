import ProductDetail from "./ProductDetail";

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const data = await getData(params.productId)
  return <ProductDetail product={data} />;
}