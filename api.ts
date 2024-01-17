import { IProducts } from "./types/products";

const baseUrl = 'http://localhost:3001';

export const getAllProducts = async (): Promise<IProducts[]> => {
const res = await fetch(`${baseUrl}/products`);
const products = res.json();
return products;
}