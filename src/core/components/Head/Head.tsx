import { useEffect } from "react";

interface HeadProps {
  title: string;
  description?: string;
}

export const Head = (props: HeadProps) => {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};
