const inriverFetch = async (
  url: string,
  postData: string = undefined
): Promise<Response> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://apieuw.productmarketingcloud.com/api/v1.0.0/";
  const header = new Headers({ "X-inRiver-APIKey": apiKey });

  const reqInit: RequestInit = {
    headers: header,
  };

  if (postData !== undefined) {
    reqInit.body = postData;
    reqInit.method = "POST";
    header.append("Content-Type", "application/json");
    reqInit.headers = header;
  }

  if (import.meta.env.PROD) {
    reqInit.credentials = "include";
    reqInit.headers = new Headers({});
    reqInit.mode = "cors";
  }

  return fetch(baseUrl + url, reqInit);
};

// example call to fetch entity summary.
export const getEntitySummary = async (
  entityId: string
): Promise<EntitySummary> => {
  //https://apieuw.productmarketingcloud.com/api/v1.0.0/entities/4337/summary
  const entitySummaryResponse = await inriverFetch(
    `entities/${entityId}/summary`
  );
  const entitySummary = (await entitySummaryResponse.json()) as EntitySummary;
  return entitySummary;
};

// simple interface with just the fields id and fieldSetId from the response.
export interface EntitySummary {
  id: number;
  fieldSetId: string;
}
