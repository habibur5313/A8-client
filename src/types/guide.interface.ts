export interface IGuide {
  id: string;
  userId: string;
  name: string;
  email: string;
  password?: string
  profilePhoto?: string | null;
  contactNumber: string;
  gender: string;
  address?: string;
  district?: string;
  registrationNumber: string;
  experience: number;
  languages: string[]; // e.g. ["English", "Bangla"]
  skills: string[]; // e.g. ["History", "Photography"]
  guideFee: number;
  qualification: string;
  about?: string; // short bio
  currentWorkingPlace?: string;
  designation?: string;
  averageRating: number;
  totalReviews: number;
  isAvailable: boolean;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
