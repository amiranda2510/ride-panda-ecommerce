import {Button} from "@nextui-org/button";
import Image from 'next/image';
import { IProduct } from "@/common/types";

function StarIcon(props: {className: string}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

type ProductProps = {
  product: IProduct
}

export default function ProductDetail(props: ProductProps) {
  return (
    <div className="flex-1 p-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-4xl">
        <div className="flex-1">
          <div className="bg-muted-foreground/10 aspect-w-1 aspect-h-1 flex items-center justify-center">
            <Image width={400} height={300} src={props.product.image} alt={props.product.image} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{props.product.title}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <StarIcon className="w-4 h-4 text-red-500" />
            <StarIcon className="w-4 h-4 text-red-500" />
            <StarIcon className="w-4 h-4 text-red-500" />
            <StarIcon className="w-4 h-4 text-red-500" />
            <StarIcon className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">(120 reviews)</p>
          </div>
          <p>{props.product.description}</p>
          <div className="text-2xl font-bold text-red-600">${props.product.price.toFixed(2)}</div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Category: {props.product.category}</p>
            <Button className="bg-red-500 text-white rounded-md">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}