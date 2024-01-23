import {
  Client,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "urql";

let urqlClient: Client | null = null;

let ssrCache: ReturnType<typeof ssrExchange> | null = null;

const isServer = typeof window === "undefined";

const API_URL: string = process.env.NEXT_PUBLIC_GRAPHQL_API;

const initUrqlClient = (initialState?: any) => {
  if (urqlClient === null) {
    // fill the client with initial state from the server.

    ssrCache = ssrExchange({ initialState, isClient: !isServer });

    urqlClient = createClient({
      url: API_URL,
      fetchOptions: { headers: { "Content-Type": "application/json" } },
      exchanges: [
        ssrCache, // Add `ssr` in front of the `fetchExchange`
        fetchExchange,
        cacheExchange,
      ],
    });
  } else {
    // when navigating to another page, client is already initialized.
    // lets restore that page's initial state
    ssrCache?.restoreData(initialState);
  }

  // Return both the Client instance and the ssrCache.
  return { urqlClient, ssrCache };
};

export default initUrqlClient;
