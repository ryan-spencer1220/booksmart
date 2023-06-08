import React from "react";

const UserResponse = ({ text }: { text: string }) => {
  return (
    <div className="pt-4">
      <p className="text-white">{`>You`}</p>
      <p className="text-aqua">{text}</p>
    </div>
  );
};

export default UserResponse;
