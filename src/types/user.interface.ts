import { UserRole, UserStatus } from "@/lib/auth-utils";
import { IAdmin } from "./admin.interface";
import { IGuide } from "./guide.interface";
import { ITourist } from "./tourist.interface";

export interface UserInfo {
  id: string;
  email: string;
  password: string;
  role: UserRole; // e.g. "SUPER_ADMIN" | "ADMIN" | "GUIDE" | "TOURIST"
  needPasswordChange: boolean;
  status: UserStatus; // e.g. "ACTIVE" | "INACTIVE" | "SUSPENDED"
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  superAdmin?: IAdmin | null;
  admin?: IAdmin | null;
  guide?: IGuide | null;
  tourist?: ITourist | null;
  profile: {
    id: string;
    userId: string;
    name: string;
    email: string;
    profilePhoto?: string | null;
    contactNumber?: string;
  };
}
