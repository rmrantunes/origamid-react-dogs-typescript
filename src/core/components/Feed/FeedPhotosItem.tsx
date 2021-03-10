import { Photo } from "src/adapters";

import styles from "./FeedPhotosItem.module.css";

interface FeedPhotosItemProps {
  photo: Photo;
}

export const FeedPhotosItem = ({ photo }: FeedPhotosItemProps) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views} >{photo.acessos}</span>
    </li>
  );
};
