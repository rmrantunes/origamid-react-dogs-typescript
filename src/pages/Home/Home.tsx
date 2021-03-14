import { Feed, Head } from "src/core/components";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site Dogs com o feed de fotos" />
      <Feed />
    </section>
  );
};
