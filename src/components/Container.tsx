import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1700px] px-3 sm:px-4 md:px-5 lg:px-8 xl:px-12 ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;
