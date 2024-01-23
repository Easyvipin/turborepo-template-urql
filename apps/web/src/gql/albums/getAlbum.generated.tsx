import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetAlbumQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type GetAlbumQuery = {
  __typename?: "Query";
  album?: {
    __typename?: "Album";
    id?: string | null;
    title?: string | null;
    user?: {
      __typename?: "User";
      username?: string | null;
      id?: string | null;
    } | null;
  } | null;
};

export const GetAlbumDocument = gql`
  query getAlbum($id: ID!) {
    album(id: $id) {
      id
      title
      user {
        username
        id
      }
    }
  }
`;

export function useGetAlbumQuery(
  options: Omit<Urql.UseQueryArgs<GetAlbumQueryVariables>, "query">
) {
  return Urql.useQuery<GetAlbumQuery, GetAlbumQueryVariables>({
    query: GetAlbumDocument,
    ...options,
  });
}
