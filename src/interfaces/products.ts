export interface SimpleProductModel {
  _id: string;
  name: string;
  article: string;
  thumbnail: string;
}

export interface BaseProductModel extends SimpleProductModel {
  images: string[] | [];
  rating: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  isHiddenForClients: boolean;
}
