import { useState } from "react";
import styles from "./Image.module.css";

interface ImageProps {
  alt: string;
  src: string;
}

export const Image = ({ alt, src }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    setSkeleton(false);
    event.currentTarget.style.opacity = "1";
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} src={src} />
    </div>
  );
};
