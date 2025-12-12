import { z } from "zod";

// Enum for Listing Category (matches your Prisma enum ListingCategory)
const ListingCategorySchema = z.enum([
  "Food",
  "Adventure",
  "Culture",
  "Photography",
  "Nature",
]);

// Create Listing Schema
export const createListingZodSchema = z.object({
  title: z.string({
    error: "Title is required",
  }),
  description: z.string().optional(),
  price: z
    .number({
      error: "Price is required",
    })
    .int("Price must be an integer")
    .positive("Price must be a positive integer"),
  location: z.string().optional(),
  images: z.array(z.string()).optional(), // array of image URLs
  maxGroupSize: z.number().int().positive().optional(),
  language: z.array(z.string()).optional(),
  duration: z.string().optional(),
  category: ListingCategorySchema,
});

// Update Listing Schema
export const updateListingZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().int().positive().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    maxGroupSize: z.number().int().positive().optional(),
    language: z.array(z.string()).optional(),
    duration: z.string().optional(),
    category: ListingCategorySchema.optional(),
    guideId: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

// Export together
export const ListingValidation = {
  createListingZodSchema,
  updateListingZodSchema,
};
