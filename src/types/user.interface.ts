import { UserRole } from "@/lib/auth-utils";
import { IAdmin } from "./admin.interface";
import { IGuide } from "./guide.interface";
import { ITourist } from "./tourist.interface";

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  needPasswordChange: boolean;
  status: "ACTIVE" | "BLOCKED" | "DELETED";
  admin?: IAdmin;
  tourist?: ITourist;
  guide?: IGuide;
  createdAt: string;
  updatedAt: string;
  profile: {
    name?: string;
    contactNumber?: string;
    address?: string;
    phone?: string;
    avatarUrl?: string;
    bio?: string;
  };
}
