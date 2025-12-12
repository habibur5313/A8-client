import { BookingStatus, PaymentStatus } from "@/types/booking.interface";
import { z } from "zod";

// ===============================
// CREATE BOOKING VALIDATION
// ===============================
export const createBookingZodSchema = z.object({
    listingId: z.string({
     error: "Listing ID is required",
    }),
    bookingDate: z
      .string({
        error: "Booking date is required",
      })
      .datetime("Invalid datetime format, expected ISO string"),
  });

// ===============================
// UPDATE BOOKING STATUS VALIDATION
// ===============================
export const updateBookingStatusZodSchema = z.object({
  body: z
    .object({
      status: z.enum(Object.values(BookingStatus) as [string, ...string[]]).optional(),
      paymentStatus: z.enum(Object.values(PaymentStatus) as [string, ...string[]]).optional(),
    })
    .refine((data) => data.status || data.paymentStatus, {
      message: "Either status or paymentStatus must be provided for update",
      path: ["body"],
    }),
});

export const BookingValidation = {
  createBookingZodSchema,
  updateBookingStatusZodSchema,
};
