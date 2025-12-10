/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import {  IGuideProfile } from "@/types/guide.interface";
import {
  createGuideZodSchema,
  updateGuideZodSchema,
} from "@/zod/guides.validation";

// ===============================
// CREATE GUIDE
// ===============================
export async function createGuide(_prevState: any, formData: FormData) {
  // Parse languages (JSON array)
  const languagesString = formData.get("languages") as string;
  let languages: string[] = [];
  if (languagesString) {
    try {
      languages = JSON.parse(languagesString);
      if (!Array.isArray(languages)) languages = [];
    } catch {
      languages = [];
    }
  }

  // Parse skills
  const skillsString = formData.get("skills") as string;
  let skills: string[] = [];
  if (skillsString) {
    try {
      skills = JSON.parse(skillsString);
      if (!Array.isArray(skills)) skills = [];
    } catch {
      skills = [];
    }
  }

  const guideFeeValue = formData.get("guideFee");
  const experienceValue = formData.get("experience");

  const validationPayload: Partial<IGuideProfile> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    contactNumber: formData.get("contactNumber") as string,
    address: formData.get("address") as string,
    district: formData.get("district") as string,
    registrationNumber: formData.get("registrationNumber") as string,
    experience: experienceValue ? Number(experienceValue) : 0,
    gender: formData.get("gender") as "MALE" | "FEMALE",
    guideFee: guideFeeValue ? Number(guideFeeValue) : 0,
    qualification: formData.get("qualification") as string,
    about: formData.get("about") as string,
    currentWorkingPlace: formData.get("currentWorkingPlace") as string,
    designation: formData.get("designation") as string,
    languages,
    skills,
    profilePhoto: formData.get("file") as unknown as string,
  };

  const validatedPayload = zodValidator(
    validationPayload,
    createGuideZodSchema
  );
  if (!validatedPayload.success || !validatedPayload.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  const backendPayload = {
    password: validatedPayload.data.password,
    guide: {
      name: validatedPayload.data.name,
      email: validatedPayload.data.email,
      contactNumber: validatedPayload.data.contactNumber,
      address: validatedPayload.data.address,
      district: validatedPayload.data.district,
      registrationNumber: validatedPayload.data.registrationNumber,
      experience: validatedPayload.data.experience,
      gender: validatedPayload.data.gender,
      guideFee: validatedPayload.data.guideFee,
      qualification: validatedPayload.data.qualification,
      about: validatedPayload.data.about,
      currentWorkingPlace: validatedPayload.data.currentWorkingPlace,
      designation: validatedPayload.data.designation,
      languages: validatedPayload.data.languages,
      skills: validatedPayload.data.skills,
    },
  };

  const newFormData = new FormData();
  newFormData.append("data", JSON.stringify(backendPayload));

  const file = formData.get("file");

  if (file && file instanceof File && file.size > 0) {
    newFormData.append("file", formData.get("file") as Blob);
  }

  console.log(newFormData);
  try {
    const response = await serverFetch.post("/user/create-guide", {
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
// GET ALL GUIDES
// ===============================
export async function getGuides(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/guide${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// GET SINGLE GUIDE BY ID
// ===============================
export async function getGuideById(id: string) {
  try {
    const response = await serverFetch.get(`/guide/${id}`);
    return await response.json();
  } catch (error: any) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// UPDATE GUIDE
// ===============================
export async function updateGuide(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const guideFeeValue = formData.get("guideFee");
  const experienceValue = formData.get("experience");

  const validationPayload: Partial<IGuideProfile> = {
    name: formData.get("name") as string,
    contactNumber: formData.get("contactNumber") as string,
    address: formData.get("address") as string,
    district: formData.get("district") as string,
    registrationNumber: formData.get("registrationNumber") as string,
    experience: experienceValue ? Number(experienceValue) : 0,
    gender: formData.get("gender") as "MALE" | "FEMALE",
    guideFee: guideFeeValue ? Number(guideFeeValue) : 0,
    qualification: formData.get("qualification") as string,
    about: formData.get("about") as string,
    currentWorkingPlace: formData.get("currentWorkingPlace") as string,
    designation: formData.get("designation") as string,
  };

  // Parse languages
  const languagesValue = formData.get("languages") as string;
  if (languagesValue) {
    try {
      const parsed = JSON.parse(languagesValue);
      if (Array.isArray(parsed)) validationPayload.languages = parsed;
    } catch {}
  }

  // Parse skills
  const skillsValue = formData.get("skills") as string;
  if (skillsValue) {
    try {
      const parsed = JSON.parse(skillsValue);
      if (Array.isArray(parsed)) validationPayload.skills = parsed;
    } catch {}
  }

  const validatedPayload = zodValidator(
    validationPayload,
    updateGuideZodSchema
  );

  if (!validatedPayload.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validatedPayload.errors,
      formData: validationPayload,
    };
  }

  try {
    const response = await serverFetch.patch(`/guide/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedPayload.data),
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
// SOFT DELETE GUIDE
// ===============================
export async function softDeleteGuide(id: string) {
  try {
    const response = await serverFetch.delete(`/guide/soft/${id}`);
    return await response.json();
  } catch (error: any) {
    return { success: false, message: "Something went wrong" };
  }
}

// ===============================
// PERMANENT DELETE GUIDE
// ===============================
export async function deleteGuide(id: string) {
  try {
    const response = await serverFetch.delete(`/guide/${id}`);
    return await response.json();
  } catch (error: any) {
    return { success: false, message: "Something went wrong" };
  }
}
