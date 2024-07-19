import Product, {IProduct} from "./product";
import {Button} from "@nextui-org/button";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function ProductList() {
  const data = await getData()
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {data.map((product, index) => <Product product={product} key={index}/>)}    
    </div>
  );
}
