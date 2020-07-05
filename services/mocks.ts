import Store from "../models/Store";

export const MOCK_GET_STORES = [
  {
    "id": 2,
    "label": "Central",
    "workShake": true,
    "latitude": 50.844817,
    "longitude": 4.356239,
    "chainStore": {
      "id": 1,
      "label": "Quick",
      "logo": "some image"
    }
  },
  {
    "id": 1,
    "label": "Anspach",
    "workShake": false,
    "latitude": 50.849174,
    "longitude": 4.350923,
    "chainStore": {
      "id": 1,
      "label": "Quick",
      "logo": "some image"
    }
  }
]