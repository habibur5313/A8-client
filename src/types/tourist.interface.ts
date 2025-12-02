export interface ITourist {
  id: string;
  userId: string;
  name: string;
  email: string;
  profilePhoto?: string | null;
  contactNumber?: string;
  country?: string;
  address?: string;
  preferences?: string[];
  emergencyContact?: string;
  isDeleted: Boolean;
  createdAt: string;
  updatedAt: string;
}
