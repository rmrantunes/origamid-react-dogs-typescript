import { Photo } from "src/adapters";
import { FeedChildrenSharedProps, Image } from "src/core/components";

import styles from "./FeedPhotosItem.module.css";

interface FeedPhotosItemProps extends FeedChildrenSharedProps {
  photo: Photo;
}

export const FeedPhotosItem = ({
  photo,
  setModalPhoto,
}: FeedPhotosItemProps) => {
  function changePhotoInModal() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={changePhotoInModal}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};
