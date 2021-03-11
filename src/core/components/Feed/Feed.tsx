import { useState } from "react";
import { Photo } from "src/adapters";
import { FeedModal, FeedPhotos } from "src/core/components";

export interface FeedChildrenSharedProps {
  setModalPhoto: React.Dispatch<React.SetStateAction<Photo | null>>;
}

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photoId={modalPhoto.id} {...{ setModalPhoto }} />
      )}
      <FeedPhotos {...{ setModalPhoto }} />
    </div>
  );
};
