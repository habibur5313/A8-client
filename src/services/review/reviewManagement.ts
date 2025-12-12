/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { ReviewValidation } from "@/zod/review.validation";

// ===============================
// CREATE REVIEW
// ===============================
export async function createReview(formData: FormData) {
  const payload = {
    guideId: formData.get("guideId") as string,
    rating: Number(formData.get("rating")),
    comment: formData.get("comment") as string,
  };

  const validated = zodValidator(payload, ReviewValidation.create);

  if (!validated.success || !validated.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validated.errors,
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.post("/review", {
      body: JSON.stringify({ body: validated.data.body }),
      headers: { "Content-Type": "application/json" },
    });

    return await response.json();
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
      formData: payload,
    };
  }
}

// ===============================
// GET ALL REVIEWS (OPTIONAL FILTERS)
// ===============================
export async function getReviewsById(email: string) {
  try {
    const response = await serverFetch.get(
      `/review?email=${email}}`
    );
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

export async function getReviews(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/review${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}
