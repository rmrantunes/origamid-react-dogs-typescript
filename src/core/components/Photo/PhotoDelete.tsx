import { useContext } from "react";
import { DELETE_PHOTO_FETCH_CONFIG } from "src/adapters/delete-photo";
import { UserContext } from "src/core/contexts";
import { useFetch } from "src/core/hooks";
import styles from "./PhotoDelete.module.css";

export const PhotoDelete = ({ id }: { id: number }) => {
  const { token } = useContext(UserContext);
  const { loading, request } = useFetch();

  async function deletePhoto() {
    const userPermitionForDeletion = window.confirm(
      "Deseja mesmo deletar essa foto?"
    );

    if (!token || !userPermitionForDeletion) return;
    const { url, options } = DELETE_PHOTO_FETCH_CONFIG(id, token);

    const { response } = await request(url, options);
    if (response?.ok) window.location.reload();
  }

  return (
    <button disabled={loading} onClick={deletePhoto} className={styles.delete}>
      {loading ? "Deletando" : "Deletar"}
    </button>
  );
};
