import z from "zod";

export const createGuideZodSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  contactNumber: z.string().min(10, "Contact Number must be at least 10 characters long"),
  address: z.string().min(1, "Address is required"),
  district: z.string().min(1, "District is required"),
  registrationNumber: z.string().min(3, "Registration Number must be at least 3 characters long"),
  experience: z.coerce.number().positive("Experience must be more than 0"),
  gender: z.enum(["MALE", "FEMALE"]),
  guideFee: z.coerce.number().positive("Guide fee must be more than 0"),

  qualification: z.string().min(3, "Qualification is required"),
  currentWorkingPlace: z.string().min(3, "Current Working Place is required"),
  about: z.string().min(5, "About section is required"),

  languages: z.array(z.string()).min(1, "At least one language is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),

  // 🔥 FIXED
  profilePhoto: z.union([z.string(), z.instanceof(File)]).optional(),
});


export const updateGuideZodSchema = z.object({
  name: z.string().min(3).optional(),
  profilePhoto: z.string().optional(),
  contactNumber: z.string().min(10).optional(),
  address: z.string().optional(),
  district: z.string().optional(),
  registrationNumber: z.string().min(3).optional(),
  experience: z.number().min(0).optional(),
  gender: z.enum(["MALE", "FEMALE"]).optional(),
  guideFee: z.number().min(0).optional(),
  qualification: z.string().min(3).optional(),
  about: z.string().min(3).optional(),
  currentWorkingPlace: z.string().min(3).optional(),
  languages: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
});   