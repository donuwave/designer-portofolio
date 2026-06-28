import { QueryClientConfig } from '@tanstack/query-core';

interface IQueryClientOptions {
  isServer: boolean;
  linkObjectGUID?: string;
}

export const getQueryClientConfig = ({
  isServer,
  linkObjectGUID = '',
}: IQueryClientOptions): QueryClientConfig => {
  const cacheTime = isServer ? 0 : 60_000 * 5;

  return {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: cacheTime,
        gcTime: cacheTime,
        retry: isServer ? 0 : 1,
        refetchOnMount: false,
        queryKeyHashFn: (queryKey) => {
          const keyHash = [...queryKey, linkObjectGUID];
          return JSON.stringify(keyHash);
        },
      },
    },
  };
};
