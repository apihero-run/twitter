import {
  Error,
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
export const listIdCreate: ApiHeroEndpoint<
  { list?: ListCreateRequest },
  ListCreateResponse | Error
> = {
  id: "listIdCreate",
  clientId: "twitter",
};

/** 


* List lookup by List ID.
* Returns a List.
* @param id - The ID of the List.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const listIdGet: ApiHeroEndpoint<
  {
    id: string;
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
    expansions?: Array<"owner_id">;
  },
  Get2ListsIdResponse | Error
> = {
  id: "listIdGet",
  clientId: "twitter",
};

/** 


* Update List.
* Update a List that you own.
* @param id - The ID of the List to modify. 
*/
export const listIdUpdate: ApiHeroEndpoint<
  { id: string; list?: ListUpdateRequest },
  ListUpdateResponse | Error
> = {
  id: "listIdUpdate",
  clientId: "twitter",
};

/** 


* Delete List
* Delete a List that you own.
* @param id - The ID of the List to delete. 
*/
export const listIdDelete: ApiHeroEndpoint<{ id: string }, ListDeleteResponse | Error> = {
  id: "listIdDelete",
  clientId: "twitter",
};

/** 


* Add a List member
* Causes a User to become a member of a List.
* @param id - The ID of the List for which to add a member. 
*/
export const listAddMember: ApiHeroEndpoint<
  { id: string; member?: ListAddUserRequest },
  ListMutateResponse | Error
> = {
  id: "listAddMember",
  clientId: "twitter",
};

/** 


* Remove a List member
* Causes a User to be removed from the members of a List.
* @param id - The ID of the List to remove a member.
* @param userId - The ID of User that will be removed from the List. 
*/
export const listRemoveMember: ApiHeroEndpoint<
  { id: string; userId: string },
  ListMutateResponse | Error
> = {
  id: "listRemoveMember",
  clientId: "twitter",
};

/** 


* Get User's Followed Lists
* Returns a User's followed Lists.
* @param id - The ID of the User to lookup.
* @param [maxResults=100] - The maximum number of results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const userFollowedLists: ApiHeroEndpoint<
  {
    id: string;
    maxResults?: number;
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
    expansions?: Array<"owner_id">;
    paginationToken?: string;
  },
  Get2UsersIdFollowedListsResponse | Error
> = {
  id: "userFollowedLists",
  clientId: "twitter",
};

/** 


* Follow a List
* Causes a User to follow a List.
* @param id - The ID of the authenticated source User that will follow the List. 
*/
export const listUserFollow: ApiHeroEndpoint<
  { id: string; followedList?: ListFollowedRequest },
  ListFollowedResponse | Error
> = {
  id: "listUserFollow",
  clientId: "twitter",
};

/** 


* Unfollow a List
* Causes a User to unfollow a List.
* @param id - The ID of the authenticated source User that will unfollow the List.
* @param listId - The ID of the List to unfollow. 
*/
export const listUserUnfollow: ApiHeroEndpoint<
  { id: string; listId: string },
  ListFollowedResponse | Error
> = {
  id: "listUserUnfollow",
  clientId: "twitter",
};

/** 


* Get a User's List Memberships
* Get a User's List Memberships.
* @param id - The ID of the User to lookup.
* @param [maxResults=100] - The maximum number of results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const getUserListMemberships: ApiHeroEndpoint<
  {
    id: string;
    maxResults?: number;
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
    expansions?: Array<"owner_id">;
    paginationToken?: string;
  },
  Get2UsersIdListMembershipsResponse | Error
> = {
  id: "getUserListMemberships",
  clientId: "twitter",
};

/** 


* Get a User's Owned Lists.
* @param id - The ID of the User to lookup.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const listUserOwnedLists: ApiHeroEndpoint<
  {
    id: string;
    paginationToken?: string;
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
    expansions?: Array<"owner_id">;
  },
  Get2UsersIdOwnedListsResponse | Error
> = {
  id: "listUserOwnedLists",
  clientId: "twitter",
};

/** 


* Get a User's Pinned Lists
* Get a User's Pinned Lists.
* @param id - The ID of the authenticated source User for whom to return results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [listFields] - A comma separated list of List fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const listUserPinnedLists: ApiHeroEndpoint<
  {
    id: string;
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
    expansions?: Array<"owner_id">;
  },
  Get2UsersIdPinnedListsResponse | Error
> = {
  id: "listUserPinnedLists",
  clientId: "twitter",
};

/** 


* Pin a List
* Causes a User to pin a List.
* @param id - The ID of the authenticated source User that will pin the List. 
*/
export const listUserPin: ApiHeroEndpoint<
  { id: string; pinnedList: ListPinnedRequest },
  ListPinnedResponse | Error
> = {
  id: "listUserPin",
  clientId: "twitter",
};

/** 


* Unpin a List
* Causes a User to remove a pinned List.
* @param listId - The ID of the List to unpin.
* @param id - The ID of the authenticated source User for whom to return results. 
*/
export const listUserUnpin: ApiHeroEndpoint<
  { listId: string; id: string },
  ListUnpinResponse | Error
> = {
  id: "listUserUnpin",
  clientId: "twitter",
};
