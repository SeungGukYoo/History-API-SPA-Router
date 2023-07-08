import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export default function useRouter() {
  const { path, changePath } = useContext(RouterContext);

  const push = (nextPath: string) => {
    if (path === nextPath) return;
    changePath(nextPath);
  };
  return { push };
}
