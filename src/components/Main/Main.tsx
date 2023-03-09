import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return <div className="bg-body min-h-screen flex-1">{children}</div>;
};
