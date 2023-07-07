import React from "react";

type Props = {
  children: React.ReactNode;
};

function WindowRouter({ children }: Props) {
  return <div>{children}</div>;
}

export default WindowRouter;
