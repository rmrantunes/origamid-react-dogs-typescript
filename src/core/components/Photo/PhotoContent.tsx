import { Link } from "react-router-dom";
import { PhotoWithComments } from "src/adapters";
import { PhotoComments } from "src/core/components";
import { PHOTO, PROFILE } from "src/routes/paths";

import styles from "./PhotoContent.module.css";

interface PhotoContentProps {
  photoWithComments: PhotoWithComments;
}

export const PhotoContent = ({ photoWithComments }: PhotoContentProps) => {
  const { photo, comments } = photoWithComments;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`${PROFILE}/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`${PHOTO}/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade <= "1" ? "ano" : "anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments photoId={photo.id} {...{ comments }} />
    </div>
  );
};
