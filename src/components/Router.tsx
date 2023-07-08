import React, { useCallback, useEffect, useState } from "react";
import { RouterContext } from "../util/RouterContext";

type Props = {
  children: React.ReactNode;
};

function WindowRouter({ children }: Props) {
  const [path, setPeth] = useState(window.location.pathname);
  const changePath = useCallback((path: string) => {
    window.history.pushState({ path }, "", path);
    setPeth(path);
  }, []);

  useEffect(() => {
    const popStateHandler = (e: PopStateEvent) => {
      setPeth(e.state.path);
    };
    window.addEventListener("popstate", popStateHandler);
    return () => window.removeEventListener("popstate", popStateHandler);
  }, []);

  return <RouterContext.Provider value={{ path, changePath }}>{children}</RouterContext.Provider>;
}

export default WindowRouter;
