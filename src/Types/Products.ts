export interface ProductDataArr {
  data: ProductTypeFil[];
}

export interface ProductType {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  image: string;
  images: string[];
  alt: string;
  size: string;
  sizes: string[];
  userId: string;
}
export interface ProductTypeFil {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  image: string;
  images: string[];
  alt: string;
  size: string;
  userId: string;
  sizes: string[];
}
