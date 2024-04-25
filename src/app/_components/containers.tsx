import React from "react";
export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container1">
      <div className="container2">
        {children}
      </div>
    </div>
  );
};
