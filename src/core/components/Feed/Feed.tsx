import { useEffect, useState } from "react";
import { Photo } from "src/adapters";
import { FeedModal, FeedPhotos } from "src/core/components";

export interface FeedChildrenSharedProps {
  setModalPhoto: React.Dispatch<React.SetStateAction<Photo | null>>;
  userId?: number;
}

interface FeedProps {
  userId?: number;
}

export const Feed = ({ userId }: FeedProps) => {
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    function infiniteScroll() {
      if (!infinite) return;

      let wait = false;
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => (wait = false), 500);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photoId={modalPhoto.id} {...{ setModalPhoto }} />
      )}
      {pages.map((page) => {
        return (
          <FeedPhotos
            {...{ setModalPhoto, userId, page, setInfinite }}
            key={page}
          />
        );
      })}
    </div>
  );
};
