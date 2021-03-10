import { FormEvent, useState } from "react";
import { useHistory } from "react-router";

import { POST_PHOTO_FETCH_CONFIG } from "src/adapters";
import { Input, Button, ErrorMessage } from "src/core/components";
import { useForm, useFetch, useLocalStorage } from "src/core/hooks";
import { PROFILE_PATH } from "src/routes/paths";

import styles from "./UserPhotoPost.module.css";

interface Img {
  raw: File;
  preview: string;
}

export const UserPhotoPost = () => {
  const history = useHistory();

  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({} as Img);

  const { error, loading, request } = useFetch();

  const localStorageToken = useLocalStorage("token");

  async function postPhoto(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    // TO DO with a WARNING: This ! isn't the best thing to do. Display an error if no token was provided
    const token = localStorageToken.get()!;

    const { url, options } = POST_PHOTO_FETCH_CONFIG(formData, token);

    const { response } = await request(url, options);

    if (response?.ok) history.push(PROFILE_PATH);
  }

  function handleIMGChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const raw = target.files?.[0];
    if (!raw) return;

    const preview = URL.createObjectURL(raw);

    setImg({ raw, preview });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={postPhoto}>
        <Input label="Nome" name="nome" {...nome} />
        <Input label="Peso" name="peso" type="number" {...peso} />
        <Input label="idade" name="idade" type="number" {...idade} />

        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleIMGChange}
        />

        <Button disabled={loading}>{loading ? "Enviando" : "Enviar"}</Button>
        <ErrorMessage error={error} />
      </form>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};
