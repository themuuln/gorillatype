import { ReactNode } from "react";

const Screen = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default Screen;
