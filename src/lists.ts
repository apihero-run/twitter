import {
  Get2ListsIdResponse,
  Get2UsersIdFollowedListsResponse,
  Get2UsersIdListMembershipsResponse,
  Get2UsersIdOwnedListsResponse,
  Get2UsersIdPinnedListsResponse,
  ListAddUserRequest,
  ListCreateRequest,
  ListCreateResponse,
  ListDeleteResponse,
  ListFollowedRequest,
  ListFollowedResponse,
  ListMutateResponse,
  ListPinnedRequest,
  ListPinnedResponse,
  ListUnpinResponse,
  ListUpdateRequest,
  ListUpdateResponse,
  ApiHeroEndpoint,
} from "./@types";

/** 


* Create List
* Creates a new List. 
*/
export const listIdCreate: ApiHeroEndpoint<{ list?: ListCreateRequest }, ListCreateResponse> = {
  id: "listIdCreate",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* List lookup by List ID.
* Returns a List.
* @param id - The ID of the List.
* @param [expansions] - A comma separated list of fields to expand.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display. 
*/
export const listIdGet: ApiHeroEndpoint<
  {
    id: string;
    expansions?: Array<"owner_id">;
    userFields?: Array<
      | "created_at"
      | "description"
      | "entities"
      | "id"
      | "location"
      | "name"
      | "pinned_tweet_id"
      | "profile_image_url"
      | "protected"
      | "public_metrics"
      | "url"
      | "username"
      | "verified"
      | "withheld"
    >;
    listFields?: Array<
      | "created_at"
      | "description"
      | "follower_count"
      | "id"
      | "member_count"
      | "name"
      | "owner_id"
      | "private"
    >;
  },
  Get2ListsIdResponse
> = {
  id: "listIdGet",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Update List.
* Update a List that you own.
* @param id - The ID of the List to modify. 
*/
export const listIdUpdate: ApiHeroEndpoint<
  { id: string; list?: ListUpdateRequest },
  ListUpdateResponse
> = {
  id: "listIdUpdate",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Delete List
* Delete a List that you own.
* @param id - The ID of the List to delete. 
*/
export const listIdDelete: ApiHeroEndpoint<{ id: string }, ListDeleteResponse> = {
  id: "listIdDelete",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Add a List member
* Causes a User to become a member of a List.
* @param id - The ID of the List for which to add a member. 
*/
export const listAddMember: ApiHeroEndpoint<
  { id: string; member?: ListAddUserRequest },
  ListMutateResponse
> = {
  id: "listAddMember",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Remove a List member
* Causes a User to be removed from the members of a List.
* @param id - The ID of the List to remove a member.
* @param userId - The ID of User that will be removed from the List. 
*/
export const listRemoveMember: ApiHeroEndpoint<{ id: string; userId: string }, ListMutateResponse> =
  {
    id: "listRemoveMember",
    clientId: "twitter",
    version: "1.0.1",
  };

/** 


* Get User's Followed Lists
* Returns a User's followed Lists.
* @param id - The ID of the User to lookup.
* @param [expansions] - A comma separated list of fields to expand.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const userFollowedLists: ApiHeroEndpoint<
  {
    id: string;
    expansions?: Array<"owner_id">;
    userFields?: Array<
      | "created_at"
      | "description"
      | "entities"
      | "id"
      | "location"
      | "name"
      | "pinned_tweet_id"
      | "profile_image_url"
      | "protected"
      | "public_metrics"
      | "url"
      | "username"
      | "verified"
      | "withheld"
    >;
    listFields?: Array<
      | "created_at"
      | "description"
      | "follower_count"
      | "id"
      | "member_count"
      | "name"
      | "owner_id"
      | "private"
    >;
    maxResults?: number;
    paginationToken?: string;
  },
  Get2UsersIdFollowedListsResponse
> = {
  id: "userFollowedLists",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Follow a List
* Causes a User to follow a List.
* @param id - The ID of the authenticated source User that will follow the List. 
*/
export const listUserFollow: ApiHeroEndpoint<
  { id: string; followedList?: ListFollowedRequest },
  ListFollowedResponse
> = {
  id: "listUserFollow",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Unfollow a List
* Causes a User to unfollow a List.
* @param listId - The ID of the List to unfollow.
* @param id - The ID of the authenticated source User that will unfollow the List. 
*/
export const listUserUnfollow: ApiHeroEndpoint<
  { listId: string; id: string },
  ListFollowedResponse
> = {
  id: "listUserUnfollow",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Get a User's List Memberships
* Get a User's List Memberships.
* @param id - The ID of the User to lookup.
* @param [expansions] - A comma separated list of fields to expand.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const getUserListMemberships: ApiHeroEndpoint<
  {
    id: string;
    expansions?: Array<"owner_id">;
    userFields?: Array<
      | "created_at"
      | "description"
      | "entities"
      | "id"
      | "location"
      | "name"
      | "pinned_tweet_id"
      | "profile_image_url"
      | "protected"
      | "public_metrics"
      | "url"
      | "username"
      | "verified"
      | "withheld"
    >;
    listFields?: Array<
      | "created_at"
      | "description"
      | "follower_count"
      | "id"
      | "member_count"
      | "name"
      | "owner_id"
      | "private"
    >;
    maxResults?: number;
    paginationToken?: string;
  },
  Get2UsersIdListMembershipsResponse
> = {
  id: "getUserListMemberships",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Get a User's Owned Lists.
* @param id - The ID of the User to lookup.
* @param [expansions] - A comma separated list of fields to expand.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [maxResults=100] - The maximum number of results. 
*/
export const listUserOwnedLists: ApiHeroEndpoint<
  {
    id: string;
    expansions?: Array<"owner_id">;
    userFields?: Array<
      | "created_at"
      | "description"
      | "entities"
      | "id"
      | "location"
      | "name"
      | "pinned_tweet_id"
      | "profile_image_url"
      | "protected"
      | "public_metrics"
      | "url"
      | "username"
      | "verified"
      | "withheld"
    >;
    listFields?: Array<
      | "created_at"
      | "description"
      | "follower_count"
      | "id"
      | "member_count"
      | "name"
      | "owner_id"
      | "private"
    >;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2UsersIdOwnedListsResponse
> = {
  id: "listUserOwnedLists",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Get a User's Pinned Lists
* Get a User's Pinned Lists.
* @param id - The ID of the authenticated source User for whom to return results.
* @param [expansions] - A comma separated list of fields to expand.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display. 
*/
export const listUserPinnedLists: ApiHeroEndpoint<
  {
    id: string;
    expansions?: Array<"owner_id">;
    userFields?: Array<
      | "created_at"
      | "description"
      | "entities"
      | "id"
      | "location"
      | "name"
      | "pinned_tweet_id"
      | "profile_image_url"
      | "protected"
      | "public_metrics"
      | "url"
      | "username"
      | "verified"
      | "withheld"
    >;
    listFields?: Array<
      | "created_at"
      | "description"
      | "follower_count"
      | "id"
      | "member_count"
      | "name"
      | "owner_id"
      | "private"
    >;
  },
  Get2UsersIdPinnedListsResponse
> = {
  id: "listUserPinnedLists",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Pin a List
* Causes a User to pin a List.
* @param id - The ID of the authenticated source User that will pin the List. 
*/
export const listUserPin: ApiHeroEndpoint<
  { id: string; pinnedList: ListPinnedRequest },
  ListPinnedResponse
> = {
  id: "listUserPin",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Unpin a List
* Causes a User to remove a pinned List.
* @param listId - The ID of the List to unpin.
* @param id - The ID of the authenticated source User for whom to return results. 
*/
export const listUserUnpin: ApiHeroEndpoint<{ listId: string; id: string }, ListUnpinResponse> = {
  id: "listUserUnpin",
  clientId: "twitter",
  version: "1.0.1",
};
