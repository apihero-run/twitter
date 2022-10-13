import { ApiHeroEndpoint } from "./@types";

/** 


* Returns the OpenAPI Specification document.
* Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md) 
*/
export const getOpenApiSpec: ApiHeroEndpoint<void, {}> = {
  id: "getOpenApiSpec",
  clientId: "twitter",
  version: "1.0.1",
};
