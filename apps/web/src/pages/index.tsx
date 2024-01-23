import ButtonUsage from "@components/Button";
import { useGetAlbumQuery } from "@gql/albums/getAlbum.generated";

export default function Home() {
  const [result] = useGetAlbumQuery({
    variables: {
      id: "1",
    },
  });

  console.log(result);

  return (
    <main>
      <ButtonUsage />
    </main>
  );
}
