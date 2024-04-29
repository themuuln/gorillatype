"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { convertGithubUrl } from "@/lib/helpers";
import axios from "axios";
import { Button } from "../ui/button";
import { urlType } from "@/app/page";

const LinkUploader = ({ onClickStart }: { onClickStart: (url: urlType) => void }) => {
  const [rawUrl, setRawUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = convertGithubUrl(e.target.value);
    setRawUrl(newUrl);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>File Link:</div>
      <p className="text-sm">Note: Currently works on only Personal account repo(s)</p>
      <Input onChange={handleChange} value={rawUrl} className="border-dashed border border-secondary text-black" />
      <Button onClick={() => onClickStart(rawUrl)}>Start</Button>
      <div>result: {rawUrl}</div>
    </div>
  );
};

export default LinkUploader;
