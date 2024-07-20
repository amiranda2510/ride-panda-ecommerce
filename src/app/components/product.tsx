import Image from 'next/image';
import Link from "next/link";
import {Button} from "@nextui-org/button";

export interface IProduct {
  id: string
  name: string
  price: number
  rating: number
  category: string
  description: string
  image: string
}

interface IProductProps {
  product: IProduct
}

const Product = (props: IProductProps) => {
  return (
    
      <div className="bg-background rounded-lg shadow-md overflow-hidden">
       <Link href={`/${props.product.id}`} prefetch={false}> 
        <Image width={400} height={300} src={props.product.image} alt={props.product.image} className="object-cover w-full h-60" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{props.product.title}</h3>
          <p className="text-muted-foreground text-sm">{props.product.category}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-lg text-red-500">${props.product.price.toFixed(2)}</span>
            <Button size="md" className='border-2 rounded-md font-medium'>Add to Cart</Button>
          </div>
        </div>
        </Link>
      </div>
    
  )
}

export default Product
