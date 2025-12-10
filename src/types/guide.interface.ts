export interface IGuideProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  password?: string;
  profilePhoto: string | null;
  contactNumber: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  address: string;
  district: string;
  registrationNumber: string;
  experience: number;
  languages: string[];
  skills: string[];
  guideFee: number;
  qualification: string;
  about: string;
  currentWorkingPlace: string;
  designation: string;
  averageRating: number;
  totalReviews: number;
  isAvailable: boolean;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface IGuide {
  name: string;
  id: string;
  email: string;
  password: string;
  role: "GUIDE" | "ADMIN" | "USER"; // extend if needed
  needPasswordChange: boolean;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED"; // extend if needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  profile: IGuideProfile;
}