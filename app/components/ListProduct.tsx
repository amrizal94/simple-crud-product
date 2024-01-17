import { IProducts } from "@/types/products"
import Product from "./Product"

interface ListProductProps {
  products: IProducts[]
}

const ListProduct: React.FC<ListProductProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th></th>
        <th>Nama Produk</th>
        <th>Keterangan</th>
        <th>Harga</th>
        <th>Jumlah</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </tbody>
  </table>
</div>
  )
}

export default ListProduct