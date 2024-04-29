import React from "react";
import Input from "./Input";

const Field = ({ text }: { text: string }) => {
  return (
    <>
      <Input />
      <div className="text-white">{JSON.stringify(text, null, 2)}</div>
    </>
  );
};

export default Field;
