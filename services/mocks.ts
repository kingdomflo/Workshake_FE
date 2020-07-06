import Store from "../models/Store";

export const MOCK_GET_STORE = {
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
  MOCK_GET_STORE
]

export const MOCK_GET_USER = {
  name: 'Samy Gnu',
  email: 'samy@gnu.no',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FteSBHbnUiLCJyb2xlIjpbInVzZXIiXSwiaWQiOjQyfQ.RyrOyCjuxK33qQ0rGSH6tn6abEDY2C4MuyGXLy8yuaQ'
}