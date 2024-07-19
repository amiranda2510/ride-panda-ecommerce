import Image from 'next/image'

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
      <div className={""}>
          <div className={""}>
          <Image width={500} height={500} src={props.product.image} alt={props.product.image} />
          </div>
          <h2 className={""}>{props.product.name}</h2>
          <p className={""}>{props.product.description}</p>
          
          <div className="product__price-button-container">
              <div className={""}>${props.product.price.toFixed(2)}</div>
              <button>
                  Add to cart
              </button>
          </div>
      </div>
  )
}

export default Product
