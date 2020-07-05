import { MOCK_GET_STORES } from "./mocks"
import SquareRegion from "../models/SquareRegion"

export const GetStores = async (squareRegion: SquareRegion) => {
  return { status: 200, data: MOCK_GET_STORES }
}