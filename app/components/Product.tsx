import { IProducts } from "@/types/products"
import React from "react"

interface ProductProps {
  product: IProducts
}

const Product:React.FC<ProductProps> = ({ product }) => {
  return (
    <tr key={product.id}>
        <th>{product.id}</th>
        <td>{product.name}</td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>Edit</td>
      </tr>
  )
}

export default Product