import { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoWithComments } from "src/adapters";
import {
  PhotoComments,
  PhotoDelete,
  Image,
  PhotoChildrenSharedProps,
} from "src/core/components";
import { UserContext } from "src/core/contexts";
import { PHOTO, PROFILE } from "src/routes/paths";
import styles from "./PhotoContent.module.css";

interface PhotoContentProps extends PhotoChildrenSharedProps {
  photoWithComments: PhotoWithComments;
}

export const PhotoContent = ({
  photoWithComments,
  single = false,
}: PhotoContentProps) => {
  const { photo, comments } = photoWithComments;
  const { user } = useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`${PROFILE}/${photo.author}`}>@{photo.author}</Link>
            )}
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
      <PhotoComments photoId={photo.id} {...{ comments, single }} />
    </div>
  );
};
