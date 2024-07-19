import Product, {IProduct} from "./product";

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
    <div className="product-list">
      { data.length === 0 ? 
        (<div> There are no available products </div>)
        :(<div>{data.map((product, index) => <Product product={product} key={index}/>)}</div>)}
    </div>
  );
}
