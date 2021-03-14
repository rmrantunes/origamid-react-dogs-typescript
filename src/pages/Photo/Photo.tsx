import { useEffect } from "react";
import { useParams } from "react-router";
import { GET_PHOTO_FETCH_CONFIG, PhotoWithComments } from "src/adapters";
import { useFetch } from "src/core/hooks";
import { ErrorMessage, Head, Loading, PhotoContent } from "src/core/components";

export const Photo = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: photoWithComments,
    loading,
    error,
    request,
  } = useFetch<PhotoWithComments>();

  useEffect(() => {
    async function getPhotoWithComments() {
      const { url } = GET_PHOTO_FETCH_CONFIG(Number(id));
      await request(url);
    }

    getPhotoWithComments();
  }, [id, request]);

  if (error) return <ErrorMessage {...{ error }} />;
  if (loading) return <Loading />;
  if (photoWithComments)
    return (
      <section className={"container mainContainer"}>
        <Head title={photoWithComments.photo.title} />
        <PhotoContent single {...{ photoWithComments }} />
      </section>
    );
  return <>Hello</>;
};
