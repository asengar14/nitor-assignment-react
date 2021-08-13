/**
 *  API URL List
 */
export const requests = {
  search: (term: string, page: number) => {
    return `search?term=${term}&page=${page}`;
  },
};

/**
 *  API Names
 */
export const serviceName = {
  search: "Search",
};