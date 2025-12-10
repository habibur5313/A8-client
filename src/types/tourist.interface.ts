export interface ITouristProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  profilePhoto?: string | null;
  contactNumber?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  country?: string;
  address?: string;
  preferences?: string[];
  emergencyContact?: string;
  isDeleted: boolean;
  isVerified?: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface ITourist {
  id: string;
  userId: string;
  name: string;
  email: string;
  password?: string; // optional if tourists can log in
  role: "TOURIST" | "ADMIN" | "GUIDE"; // extend if needed
  needPasswordChange?: boolean;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED"; // extend if needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  profile: ITouristProfile;
}