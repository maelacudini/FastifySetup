export type CreateUserBody = {
  password: string
  email: string
}

export type LoginUserBody = {
  password: string
  email: string
}

export type UpdateUserBody = {
  username: string
}