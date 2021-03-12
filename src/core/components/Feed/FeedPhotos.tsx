import { useEffect } from "react";

import { GET_PHOTOS_FETCH_CONFIG, Photo } from "src/adapters";
import {
  FeedPhotosItem,
  ErrorMessage,
  Loading,
  FeedChildrenSharedProps,
} from "src/core/components";
import { useFetch } from "src/core/hooks";

import styles from "./FeedPhotos.module.css";

interface FeedPhotosProps extends FeedChildrenSharedProps {
  page: number;
  total?: number;
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeedPhotos = ({
  setModalPhoto,
  total = 3,
  page = 1,
  userId = 0,
  setInfinite,
}: FeedPhotosProps) => {
  const { data: photos, loading, request, error } = useFetch<Photo[]>();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS_FETCH_CONFIG({
        page,
        total,
        user: userId,
      });

      const { response, requestData } = await request(url, options);
      if (response && response.ok && requestData.length < total)
        setInfinite(false);
    }

    fetchPhotos();
  }, [request, userId, page, setInfinite, total]);

  if (error) return <ErrorMessage {...{ error }} />;
  if (loading) return <Loading />;
  if (photos)
    return (
      <div>
        <ul className={styles.photosList + " animeLeft"}>
          {photos.map((photo) => (
            <FeedPhotosItem {...{ photo, setModalPhoto }} key={photo.id} />
          ))}
        </ul>
      </div>
    );
  return <></>;
};
