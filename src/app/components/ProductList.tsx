import ProductCard from "./ProductCard";
import { PaginationComponent } from "./Pagination";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

function paginate(elements: any[], currentPage: number, pageSize: number) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return elements.slice(startIndex, endIndex);
}
 
export default async function ProductList ({ 
  query,
  currentPage
 }: {
  query: string;
  currentPage: number;
}) {
  const data = await getData();
  const filteredData = Array.isArray(data) ? data.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  }) : [];
  const pageSize = 8
  const pageCount = filteredData.length / pageSize
  const paginatedData = paginate(filteredData, currentPage, pageSize)
  return (
    <div className="grid  gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {Array.isArray(data) && data.length === 0 && (
          <p className="mt-4">No products found</p>
        )}
        {paginatedData.map((product) => <ProductCard product={product} />)} 
      </div>
      <div className="object-center">
        <PaginationComponent pageCount={pageCount} />
      </div>
    </div>
  );
}
