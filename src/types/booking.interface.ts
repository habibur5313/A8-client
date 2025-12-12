// Booking interfaces for frontend/server-side validation

import { IGuideProfile } from "./guide.interface";
import { ITouristProfile } from "./tourist.interface";

// Booking status enum
export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
}

// Payment status enum
export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  UNPAID= "UNPAID",
}

// Payload for creating a booking
export interface IBookingCreate {
  listingId: string;
  bookingDate: string; // ISO string format
}

// Payload for updating a booking's status
export interface IBookingUpdateStatus {
  status?: BookingStatus;
  paymentStatus?: PaymentStatus;
}

// Filter request interface for querying bookings
export interface IBookingFilterRequest {
  searchTerm?: string;       // Search by id, listingId, touristId
  status?: BookingStatus;
  paymentStatus?: PaymentStatus;
  touristId?: string;
  guideId?: string;          // Filter bookings for a specific guide
}

// Booking response type (simplified)
export interface IBooking {
  id: string;
  touristId: string;
  listingId: string;
  bookingDate: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  guide: IGuideProfile;
  tourist: ITouristProfile
}
