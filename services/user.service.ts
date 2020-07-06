import { MOCK_GET_USER } from "./mocks"

export const GetUser = async (email: string, password: string) => {
  return { status: 200, data: MOCK_GET_USER }
}