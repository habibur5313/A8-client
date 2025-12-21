import { IBooking } from "./booking.interface";

export interface IReview {
  id: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ITour {
  id: string;
  title: string;
  image: string;
  images?: string[];
  price: number;
  rating: number;
  reviewCount: number;
  duration: string;
  category: 'Food' | 'Adventure' | 'Culture' | 'Photography' | 'Nature';
  guide: {
    id: string;
    name: string;
    avatar: string;
  };
  location: string;
  description?: string;
  maxGroupSize?: number;
  language?: string[];
  reviews?: IReview[];
  isVerified?: boolean;
  isAvailable?: boolean;
  booking?: IBooking[]
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
export interface IItineraryStep {
  time: string;
  title: string;
  description: string;
}