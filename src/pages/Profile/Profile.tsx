import { useParams } from "react-router";
import { Feed } from "src/core/components";

export const Profile = () => {
  const { idOrUserame } = useParams<{ idOrUserame: string }>();

  return (
    <section>
      <h1 className="title">{idOrUserame}</h1>
      <Feed {...{ idOrUserame }} />
    </section>
  );
};
