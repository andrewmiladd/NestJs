import { Product } from "src/models/products.model";

export class GetProductsResponse {
    public products: Promise<Product[]>;
}
export class GetOneProductResponse {
    public product: Promise<Product>;
}
