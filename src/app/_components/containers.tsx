import React from "react";
export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[700px] flex-col items-start justify-center">
        {children}
      </div>
    </div>
  );
};
