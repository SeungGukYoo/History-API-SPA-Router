import { createContext } from "react";

type Type = {
  path: string;
  changePath: (path: string) => void;
};

export const RouterContext = createContext<Type>({
  path: "",
  changePath: () => {
    return;
  },
});
