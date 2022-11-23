import { Product } from "src/models/products.model";

export class GetProductsResponse {
    public products: Product[];
}
export class GetOneProductResponse {
    public product: Product;
}
