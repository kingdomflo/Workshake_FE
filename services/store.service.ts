import { MOCK_GET_STORES, MOCK_GET_STORE } from "./mocks"
import SquareRegion from "../models/SquareRegion"

export const GetStores = async (squareRegion: SquareRegion) => {
  return { status: 200, data: MOCK_GET_STORES }
}

export const GetStore = async (id: number) => {
  return { status: 200, data: MOCK_GET_STORE }
}