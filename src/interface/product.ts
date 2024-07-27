export interface IProductData {
  title: string;
  image: string;
  description: string;
  price?: number;
  category?: string;
  rating?: { rate: number; count: number };
  id: string;
}