import { FormEvent, useContext, useState } from "react";

import { POST_PHOTO_FETCH_CONFIG } from "src/adapters";
import { Input, Button, ErrorMessage, Head } from "src/core/components";
import { UserContext } from "src/core/contexts";
import { useForm, useFetch, useHistoryFunctions } from "src/core/hooks";
import { MY_ACCOUNT } from "src/routes/paths";

import styles from "./UserPhotoPost.module.css";

interface Img {
  raw: File;
  preview: string;
}

export const UserPhotoPost = () => {
  const { token } = useContext(UserContext);
  const { redirectTo } = useHistoryFunctions();

  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({} as Img);

  const { error, loading, request } = useFetch();

  async function postPhoto(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    // TO DO with a WARNING: This ! isn't the best thing to do. Display an error if no token was provided
    if (!token) return;
    const { url, options } = POST_PHOTO_FETCH_CONFIG(formData, token);

    const { response } = await request(url, options);

    if (response?.ok) redirectTo(MY_ACCOUNT);
  }

  function handleIMGChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const raw = target.files?.[0];
    if (!raw) return;

    const preview = URL.createObjectURL(raw);

    setImg({ raw, preview });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
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
