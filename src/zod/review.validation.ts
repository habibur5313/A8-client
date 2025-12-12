import { z } from "zod";

// ===============================
// CREATE REVIEW
// ===============================
const createReviewZodSchema = z.object({
  body: z.object({
    guideId: z.string({
      error: "Guide ID is required",
    }),
    rating: z
      .number({
        error: "Rating is required",
      })
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5"),
    comment: z
      .string({
        error: "Comment is required",
      })
      .min(5, "Comment must be at least 5 characters")
      .max(500, "Comment cannot exceed 500 characters"),
  }),
});

// ===============================
// EXPORT VALIDATION
// ===============================
export const ReviewValidation = {
  create: createReviewZodSchema,
};
