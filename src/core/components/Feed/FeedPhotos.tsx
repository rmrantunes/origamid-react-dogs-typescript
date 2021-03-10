import { useEffect } from "react";

import { GET_PHOTOS_FETCH_CONFIG, Photo } from "src/adapters";
import { FeedPhotosItem, ErrorMessage, Loading } from "src/core/components";
import { useFetch } from "src/core/hooks";

import styles from "./FeedPhotos.module.css";

export const FeedPhotos = () => {
  const { data: photos, loading, request, error } = useFetch<Photo[]>();
  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS_FETCH_CONFIG({
        page: 1,
        total: 6,
        user: 0,
      });

      await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <ErrorMessage {...{ error }} />;
  if (loading) return <Loading />;
  if (photos)
    return (
      <div>
        <ul className={styles.photosList + " animeLeft"}>
          {photos.map((photo) => (
            <FeedPhotosItem {...{ photo }} key={photo.id} />
          ))}
        </ul>
      </div>
    );
  return <></>;
};
