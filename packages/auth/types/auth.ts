import { UserInterface } from "./user";

export type AuthContextType = {
  user: UserInterface | null;
  login: (user: UserInterface) => void;
  logout: () => void;
};
