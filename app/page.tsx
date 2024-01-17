import { getAllProducts } from "@/api";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";

export default async function Home() {
  const products =  await getAllProducts();
  return (
    <main className="max-w-4xl mx-auto">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Produk</h1>
        <AddProduct />
      </div>
      <ListProduct products = {products}/>
    </main>
  )
}
