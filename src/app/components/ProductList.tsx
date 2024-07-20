import ProductCard from "./ProductCard";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function ProductList ({ query }:{query: string}) {
  const data = await getData();
  const filteredData = Array.isArray(data) ? data.filter((product) => {
    console.log(product.title)
    return product.title.toLowerCase().includes(query.toLowerCase());
  }) : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {Array.isArray(data) && data.length === 0 && (
        <p className="mt-4">No products found</p>
      )}
      {Array.isArray(data) && filteredData.map((product) => <ProductCard product={product} />)} 
    </div>
  );
}
