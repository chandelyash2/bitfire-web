import { Admin, User } from "@/graphql/generated/schema";

export type UserType = Omit<User, "role">;
export type AdminType = Omit<Admin, "role">
