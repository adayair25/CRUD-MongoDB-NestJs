export class UpdateProductDto {
  name?: string;
  price?: number;
  currency?: string;
  categories?: string[];
  measurements?: {
    weight?: number;
    width?: number;
    height?: number;
  };
}
