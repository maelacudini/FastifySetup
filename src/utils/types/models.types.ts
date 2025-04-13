import { Document } from "mongoose"
import { RoleType } from "./constants"

export interface UserModelInterface extends Document {
  username: string;
  email: string;
  role: RoleType;
}
