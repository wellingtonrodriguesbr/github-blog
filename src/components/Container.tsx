import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-[864px] h-full">{children}</div>;
}
