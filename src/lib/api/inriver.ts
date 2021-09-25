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
