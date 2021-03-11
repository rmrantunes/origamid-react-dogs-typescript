import { FormEvent, useState } from "react";

import { Comment, SEND_COMMENT_FETCH_CONFIG } from "src/adapters";
import { useFetch, useLocalStorage } from "src/core/hooks";
import { ErrorMessage } from "src/core/components";

import { ReactComponent as Enviar } from "src/assets/enviar.svg";

interface PhotoCommentsFormProps {
  photoId: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const PhotoCommentsForm = ({
  photoId,
  setComments,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState("");
  const localStorageToken = useLocalStorage("token");
  const { request, data: newComment, error } = useFetch<Comment>();

  async function sendComment(event: FormEvent) {
    event.preventDefault();

    const token = localStorageToken.get();
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
    <form onSubmit={sendComment}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comemte..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button>
        <Enviar />
      </button>

      {error && <ErrorMessage {...{ error }} />}
    </form>
  );
};
