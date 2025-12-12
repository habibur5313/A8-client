/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { BookingStatus, IBookingCreate, IBookingUpdateStatus, PaymentStatus } from "@/types/booking.interface";
import { BookingValidation } from "@/zod/booking.validation";

// ===============================
// CREATE BOOKING
// ===============================
export async function createBooking(_prevState: any, formData: FormData) {
  const payload: Partial<IBookingCreate> = {
    listingId: formData.get("listingId") as string,
    bookingDate: formData.get("bookingDate") as string,
  };

  const validated = zodValidator(payload, BookingValidation.createBookingZodSchema);

  if (!validated.success || !validated.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validated.errors,
      formData: payload,
    };
  }

  const backendPayload = validated.data;

  try {
    const response = await serverFetch.post("/booking", {
      body: JSON.stringify({ body: backendPayload }),
      headers: { "Content-Type": "application/json" },
    });

    return await response.json();
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
      formData: payload,
    };
  }
}

// ===============================
// GET ALL BOOKINGS
// ===============================
export async function getMyBookings(queryString?: string) {
  try {
    const response = await serverFetch.get(`/booking?touristId=d99f9b96-bec5-45be-80a4-bad1089e9293${queryString ? `?${queryString}` : ""}`);
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

export async function getBookings(queryString?: string) {
  try {
    const response = await serverFetch.get(`/booking${queryString ? `?${queryString}` : ""}`);
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// GET SINGLE BOOKING BY ID
// ===============================
export async function getBookingById(id: string) {
  try {
    const response = await serverFetch.get(`/booking/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// UPDATE BOOKING STATUS
// ===============================
export async function updateBookingStatus(
  id: string,
  formData: FormData
) {
  const payload: Partial<IBookingUpdateStatus> = {
    status: formData.get("status") as BookingStatus,
    paymentStatus: formData.get("paymentStatus") as PaymentStatus,
  };

  const validated = zodValidator(
    { body: payload },
    BookingValidation.updateBookingStatusZodSchema
  );

  if (!validated.success || !validated.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validated.errors,
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.patch(`/booking/${id}/status`, {
      body: JSON.stringify(validated.data.body),
      headers: { "Content-Type": "application/json" },
    });

    return await response.json();
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
      formData: payload,
    };
  }
}

// ===============================
// DELETE BOOKING
// ===============================
export async function deleteBooking(id: string) {
  try {
    const response = await serverFetch.delete(`/booking/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// SOFT DELETE BOOKING
// ===============================
export async function softDeleteBooking(id: string) {
  try {
    const response = await serverFetch.patch(`/booking/soft-delete/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}
