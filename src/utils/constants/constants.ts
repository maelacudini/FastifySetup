import { RoleType } from "../types/constants"

const PORT = 3000
const ROLES = ["team member", "admin"] as const
const DEFAULT_ROLE: RoleType = ROLES[0]

export {
  PORT, ROLES, DEFAULT_ROLE 
}