import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className = "",
}: MaxWidthWrapperProps) {
  return (
    <div
      className={`z-50 mx-auto w-full max-w-[1360px] px-2.5 md:px-4 ${className}`}
    >
      {children}
    </div>
  );
}
