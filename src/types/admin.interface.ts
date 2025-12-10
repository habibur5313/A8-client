export interface IAdminProfile {
  id: string;
  userId?: string;
  name: string;
  email: string;
  profilePhoto?: string | null;
  contactNumber: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  address?: string;
  isDeleted: boolean;
  isVerified?: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface IAdmin {
  id: string;
  email: string;
  name: string;
  password?: string; // optional if admins log in
  role: "ADMIN" | "SUPER_ADMIN"; // extend if needed
  needPasswordChange?: boolean;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED"; // extend if needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  profile: IAdminProfile;
}