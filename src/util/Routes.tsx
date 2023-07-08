import React, { ReactNode, useContext } from "react";
import { RouterContext } from "./RouterContext";

type Props = { children: React.ReactNode };

function Routes({ children }: Props) {
  const { path } = useContext(RouterContext);

  let component: ReactNode = <div>Not Found</div>;

  if (Array.isArray(children)) {
    children.forEach((el) => {
      if (el.props.path === path) {
        component = el.props.component;
        return;
      }
    });
  }

  return component;
}

export default Routes;
