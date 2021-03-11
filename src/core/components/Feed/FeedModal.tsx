import { useEffect } from "react";
import {
  GET_PHOTO_WITH_COMMENTS_FETCH_CONFIG,
  PhotoWithComments,
} from "src/adapters";
import { useFetch } from "src/core/hooks";
import { ErrorMessage, Loading, PhotoContent } from "src/core/components";

import styles from "./FeedModal.module.css";

interface FeedModalProps {
  photoId: number;
}

/** Every time `FeedModal` renders, it fetches the photo with comments by the photo id */
export const FeedModal = ({ photoId }: FeedModalProps) => {
  const {
    error,
    request,
    loading,
    data: photoWithComments,
  } = useFetch<PhotoWithComments>();

  useEffect(() => {
    async function fetchPhotoWithComments() {
      const { url, options } = GET_PHOTO_WITH_COMMENTS_FETCH_CONFIG(photoId);
      await request(url, options);
    }

    fetchPhotoWithComments();
  }, [photoId, request]);

  return (
    <div className={styles.modal}>
      {error && <ErrorMessage {...{ error }} />}
      {loading && <Loading />}
      {photoWithComments && <PhotoContent {...{ photoWithComments }} />}
    </div>
  );
};
