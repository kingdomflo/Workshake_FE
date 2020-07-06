import { createContext, SetStateAction, Dispatch } from "react";

const UserContext = createContext<[any, Dispatch<SetStateAction<string>>]>([
  null as any,
  user => user
]);

export default UserContext;