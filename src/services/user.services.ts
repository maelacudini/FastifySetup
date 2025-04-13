import { UserType } from "../utils/types/controllers.types"

const getUserService = async (id: string): Promise<UserType> => {
  // Complex business logic to fetch user data from the database

  return {
    id: id,
    username: 'Mario'
  }
}

export { getUserService }
