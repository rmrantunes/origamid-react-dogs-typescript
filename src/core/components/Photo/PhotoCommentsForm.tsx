import { FormEvent, useContext, useState } from "react";

import { Comment, SEND_COMMENT_FETCH_CONFIG } from "src/adapters";
import { UserContext } from "src/core/contexts";
import { useFetch } from "src/core/hooks";
import { ErrorMessage, PhotoChildrenSharedProps } from "src/core/components";

import { ReactComponent as Enviar } from "src/assets/enviar.svg";

import styles from "./PhotoCommentsForm.module.css";

interface PhotoCommentsFormProps extends PhotoChildrenSharedProps {
  photoId: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const PhotoCommentsForm = ({
  photoId,
  setComments,
  single = false,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState("");
  const { token } = useContext(UserContext);
  const { request, data: newComment, error } = useFetch<Comment>();

  async function sendComment(event: FormEvent) {
    event.preventDefault();

    if (!token) return;
    const { url, options } = SEND_COMMENT_FETCH_CONFIG(
      photoId,
      { comment },
      token
    );

    const { response } = await request(url, options);
    if (!response?.ok || !newComment) return;

    setComments((comments) => [...comments, newComment]);
    setComment("");
  }

  return (
    <form
      onSubmit={sendComment}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comemte..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button className={styles.button}>
        <Enviar />
      </button>

      {error && <ErrorMessage {...{ error }} />}
    </form>
  );
};
