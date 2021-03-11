import { PhotoWithComments } from "src/adapters";

interface PhotoCommentsProps {
  photoId: number;
  comments: PhotoWithComments["comments"];
}

export const PhotoComments = (props: PhotoCommentsProps) => {
  return <div></div>;
};
