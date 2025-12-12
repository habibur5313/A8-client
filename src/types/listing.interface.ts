
export type ListingCategory =
  | "Food"
  | "Adventure"
  | "Culture"
  | "Photography"
  | "Nature";

export interface IListing {
  id: string;
  title: string;
  description?: string;
  price: number;
  location?: string;
  image?: string;
  images?: string[];
  guideId: string;
  category?: ListingCategory;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IListingCreate {
  id: string;
  title: string;
  description?: string;
  price: number;
  location?: string;
  images?: string[];
  category: ListingCategory;
  language?: string[];
  maxGroupSize?: number;
  duration?: string;
  isDeleted?: boolean;
}

export interface IListingUpdate {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  location?: string;
  image?: string;
  images?: string[];
  category?: ListingCategory;
  guideId?: string;
  language?: string[];
  maxGroupSize?: number;
  duration?: string;
  isDeleted?: boolean;
}

export interface IListingFilterRequest {
  searchTerm?: string;
  category?: ListingCategory | ListingCategory[];
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}
