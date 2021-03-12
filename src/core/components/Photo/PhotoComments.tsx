import { useContext, useEffect, useRef, useState } from "react";
import { Comment } from "src/adapters";
import { UserContext } from "src/core/contexts";
import { PhotoCommentsForm } from "src/core/components";

import styles from "./PhotoComments.module.css";

interface PhotoCommentsProps {
  photoId: number;
  comments: Comment[];
}

export const PhotoComments = ({ photoId, ...props }: PhotoCommentsProps) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);

  const commentsSectionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const commentsSection = commentsSectionRef.current;
    if (commentsSection)
      commentsSection.scrollTop = commentsSection.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul className={styles.comments} ref={commentsSectionRef}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm {...{ photoId, setComments }} />}
    </>
  );
};
