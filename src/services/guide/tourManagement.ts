/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IListingCreate, IListingUpdate } from "@/types/listing.interface";
import { ListingValidation } from "@/zod/listing.validation";

// ===============================
// CREATE LISTING
// ===============================
export async function createListing(_prevState: any, formData: FormData) {
  // Parse JSON arrays
  const languagesString = formData.get("language") as string;
  let languages: string[] = [];
  if (languagesString) {
    try {
      languages = JSON.parse(languagesString);
      if (!Array.isArray(languages)) languages = [];
    } catch {
      languages = [];
    }
  }

  const priceValue = formData.get("price");
  const GroupSize = formData.get("maxGroupSize");

  const validationPayload: Partial<IListingCreate> = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: priceValue ? Number(priceValue) : 0,
    location: formData.get("location") as string,
    category: formData.get("category") as any,
    language: languages,
    duration: formData.get("duration") as string,
    maxGroupSize: GroupSize ? Number(GroupSize) : 1,
  };

  const validated = zodValidator(
    validationPayload,
    ListingValidation.createListingZodSchema
  );

  if (!validated.success || !validated.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validated.errors,
      formData: validationPayload,
    };
  }

  const backendPayload = validated.data;

  const newFormData = new FormData();
  newFormData.append("data", JSON.stringify(backendPayload));

  const file = formData.get("file");
  if (file && file instanceof File && file.size > 0) {
    newFormData.append("file", file);
  }

  try {
    const response = await serverFetch.post("/listing", {
      body: newFormData,
    });

    return await response.json();
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
      formData: validationPayload,
    };
  }
}

// ===============================
// GET ALL LISTINGS
// ===============================
export async function getListings(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/listing${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// GET SINGLE LISTING BY ID
// ===============================
export async function getListingById(id: string) {
  try {
    const response = await serverFetch.get(`/listing/${id}`);
    return await response.json();
  } catch (error: any) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// UPDATE LISTING
// ===============================
export async function updateListing(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const languagesString = formData.get("language") as string;
  let languages: string[] = [];
  if (languagesString) {
    try {
      languages = JSON.parse(languagesString);
      if (!Array.isArray(languages)) languages = [];
    } catch {
      languages = [];
    }
  }

  const priceValue = formData.get("price");
  const GroupSize = formData.get("maxGroupSize");

  const updatePayload: Partial<IListingUpdate> = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: priceValue ? Number(priceValue) : 0,
    location: formData.get("location") as string,
    category: formData.get("category") as any,
    language: languages,
    duration: formData.get("duration") as string,
    maxGroupSize: GroupSize ? Number(GroupSize) : 1,
  };


  const validated = zodValidator(
    { body: updatePayload },
    ListingValidation.updateListingZodSchema
  );

  if (!validated.success || !validated.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validated.errors,
      formData: updatePayload,
    };
  }

    const backendPayload = validated.data;

  const newFormData = new FormData();
  newFormData.append("data", JSON.stringify(backendPayload));

  const file = formData.get("file");
  if (file && file instanceof File && file.size > 0) {
    newFormData.append("file", file);
  }

  try {
    const response = await serverFetch.patch(`/listing/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validated.data.body),
    });

    return await response.json();
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
      formData: updatePayload,
    };
  }
}

// ===============================
// DELETE LISTING
// ===============================
export async function deleteListing(id: string) {
  try {
    const response = await serverFetch.delete(`/listing/${id}`);
    return await response.json();
  } catch (error: any) {
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// SOFT DELETE LISTING
// ===============================
export async function softDeleteListing(id: string) {
  console.log(id);
  try {
    const response = await serverFetch.patch(`/listing/soft-delete/${id}`);
    return await response.json();
  } catch (error: any) {
    return { success: false, message: "Something went wrong" };
  }
}
