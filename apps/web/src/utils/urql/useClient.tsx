import { useMemo } from "react";
import initUrqlClient from "./init";
import { Client } from "urql";

/**
 * Simple hook to initialize the client with the pageProps.
 * @param pageProps - props of page
 * @returns urqlClient
 */

export const useClient = (pageProps: any): Client => {
  const urqlData = pageProps.URQL_DATA;
  const { urqlClient } = useMemo(() => {
    return initUrqlClient(urqlData);
  }, [urqlData]);

  return urqlClient;
};
