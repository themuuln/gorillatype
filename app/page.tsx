"use client";
import axios from "axios";
import Field from "@/components/action";
import LinkUploader from "@/components/link-uploader/LinkUploader";
import { useState } from "react";

export type urlType = string;

export default function Home() {
  const [data, setData] = useState({});
  const [text, setText] = useState("");

  const fetchConfigText = async (url: urlType) => {
    const response = await axios.get(url);
    const lines = response.data.split("\n");
    let indentedText = "";
    lines.forEach((line: any) => {
      indentedText += "  " + line + "\n"; // Assuming 2 spaces indentation
    });
    return indentedText;
  };

  const onClickStart = (url: urlType) => {
    fetchConfigText(url).then((res) => {
      console.log(res); // Log the fetched response
      setText(res);
    });
  };
  return (
    <main className="flex dark:bg-primary min-h-screen flex-col items-center justify-between p-24">
      <code
        onClick={() => {
          navigator.clipboard.writeText("https://github.com/themuuln/auto-committer/blob/main/.github/workflows/auto_commit.yml");
        }}
      >
        https://github.com/themuuln/auto-committer/blob/main/.github/workflows/auto_commit.yml
      </code>
      <LinkUploader
        onClickStart={(url: urlType) => {
          onClickStart(url);
        }}
      />
      <Field text={text} />
    </main>
  );
}
