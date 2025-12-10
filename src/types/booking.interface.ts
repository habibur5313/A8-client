export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'canceled';

export interface Booking {
  id: string;
  guideName: string;
  guidePhoto: string;
  tourName: string;
  date: string;
  status: BookingStatus;
  price: number;
  currency: string;
}