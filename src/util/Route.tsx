import React, { useEffect, useState } from "react";

type Props = {
  path: string;
  component: React.ReactNode;
};

function Route({ path, component }: Props) {
  const [state, setState] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setState(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return state === path && component;
}

export default Route;
