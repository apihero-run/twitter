import {
  BlockUserMutationResponse,
  BlockUserRequest,
  Get2ListsIdFollowersResponse,
  Get2ListsIdMembersResponse,
  Get2TweetsIdLikingUsersResponse,
  Get2TweetsIdRetweetedByResponse,
  Get2UsersByResponse,
  Get2UsersByUsernameUsernameResponse,
  Get2UsersIdBlockingResponse,
  Get2UsersIdFollowersResponse,
  Get2UsersIdFollowingResponse,
  Get2UsersIdMutingResponse,
  Get2UsersIdResponse,
  Get2UsersMeResponse,
  Get2UsersResponse,
  MuteUserMutationResponse,
  MuteUserRequest,
  UserId,
  UsersFollowingCreateRequest,
  UsersFollowingCreateResponse,
  UsersFollowingDeleteResponse,
  ApiHeroEndpoint,
} from "./@types";

/** 


* Returns User objects that follow a List by the provided List ID
* Returns a list of Users that follow a List by the provided List ID
* @param id - The ID of the List.
* @param [maxResults=100] - The maximum number of results.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const listGetFollowers: ApiHeroEndpoint<
  {
    id: string;
    maxResults?: number;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
  },
  Get2ListsIdFollowersResponse
> = {
  id: "listGetFollowers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Returns User objects that are members of a List by the provided List ID.
* Returns a list of Users that are members of a List by the provided List ID.
* @param id - The ID of the List.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const listGetMembers: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
  },
  Get2ListsIdMembersResponse
> = {
  id: "listGetMembers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Returns User objects that have liked the provided Tweet ID
* Returns a list of Users that have liked the provided Tweet ID
* @param id - A single Tweet ID.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [maxResults=100] - The maximum number of results. 
*/
export const tweetsIdLikingUsers: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2TweetsIdLikingUsersResponse
> = {
  id: "tweetsIdLikingUsers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Returns User objects that have retweeted the provided Tweet ID
* Returns a list of Users that have retweeted the provided Tweet ID
* @param id - A single Tweet ID.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [maxResults=100] - The maximum number of results.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. 
*/
export const tweetsIdRetweetingUsers: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    maxResults?: number;
    paginationToken?: string;
  },
  Get2TweetsIdRetweetedByResponse
> = {
  id: "tweetsIdRetweetingUsers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User lookup by IDs
* This endpoint returns information about Users. Specify Users by their ID.
* @param ids - A list of User IDs, comma-separated. You can specify up to 100 IDs.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findUsersById: ApiHeroEndpoint<
  {
    ids: Array<UserId>;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
  },
  Get2UsersResponse
> = {
  id: "findUsersById",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User lookup by usernames
* This endpoint returns information about Users. Specify Users by their username.
* @param usernames - A list of usernames, comma-separated.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findUsersByUsername: ApiHeroEndpoint<
  {
    usernames: Array<string>;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
  },
  Get2UsersByResponse
> = {
  id: "findUsersByUsername",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User lookup by username
* This endpoint returns information about a User. Specify User by username.
* @param username - A username.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findUserByUsername: ApiHeroEndpoint<
  {
    username: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
  },
  Get2UsersByUsernameUsernameResponse
> = {
  id: "findUserByUsername",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User lookup me
* This endpoint returns information about the requesting User.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findMyUser: ApiHeroEndpoint<
  {
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
  },
  Get2UsersMeResponse
> = {
  id: "findMyUser",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User lookup by ID
* This endpoint returns information about a User. Specify User by ID.
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findUserById: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
  },
  Get2UsersIdResponse
> = {
  id: "findUserById",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Returns User objects that are blocked by provided User ID
* Returns a list of Users that are blocked by the provided User ID
* @param id - The ID of the authenticated source User for whom to return results.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [maxResults] - The maximum number of results. 
*/
export const usersIdBlocking: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2UsersIdBlockingResponse
> = {
  id: "usersIdBlocking",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Block User by User ID
* Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request
* @param id - The ID of the authenticated source User that is requesting to block the target User. 
*/
export const usersIdBlock: ApiHeroEndpoint<
  { id: string; blocking: BlockUserRequest },
  BlockUserMutationResponse
> = {
  id: "usersIdBlock",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Followers by User ID
* Returns a list of Users who are followers of the specified User ID.
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [maxResults] - The maximum number of results. 
*/
export const usersIdFollowers: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2UsersIdFollowersResponse
> = {
  id: "usersIdFollowers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Following by User ID
* Returns a list of Users that are being followed by the provided User ID
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [maxResults] - The maximum number of results. 
*/
export const usersIdFollowing: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2UsersIdFollowingResponse
> = {
  id: "usersIdFollowing",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Follow User
* Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request
* @param id - The ID of the authenticated source User that is requesting to follow the target User. 
*/
export const usersIdFollow: ApiHeroEndpoint<
  { id: string; following?: UsersFollowingCreateRequest },
  UsersFollowingCreateResponse
> = {
  id: "usersIdFollow",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Returns User objects that are muted by the provided User ID
* Returns a list of Users that are muted by the provided User ID
* @param id - The ID of the authenticated source User for whom to return results.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [maxResults=100] - The maximum number of results. 
*/
export const usersIdMuting: ApiHeroEndpoint<
  {
    id: string;
    tweetFields?: Array<
      | "attachments"
      | "author_id"
      | "context_annotations"
      | "conversation_id"
      | "created_at"
      | "entities"
      | "geo"
      | "id"
      | "in_reply_to_user_id"
      | "lang"
      | "non_public_metrics"
      | "organic_metrics"
      | "possibly_sensitive"
      | "promoted_metrics"
      | "public_metrics"
      | "referenced_tweets"
      | "reply_settings"
      | "source"
      | "text"
      | "withheld"
    >;
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
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
    maxResults?: number;
  },
  Get2UsersIdMutingResponse
> = {
  id: "usersIdMuting",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Mute User by User ID.
* Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.
* @param id - The ID of the authenticated source User that is requesting to mute the target User. 
*/
export const usersIdMute: ApiHeroEndpoint<
  { id: string; muting?: MuteUserRequest },
  MuteUserMutationResponse
> = {
  id: "usersIdMute",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Unblock User by User ID
* Causes the source User to unblock the target User. The source User must match the User context authorizing the request
* @param sourceUserId - The ID of the authenticated source User that is requesting to unblock the target User.
* @param targetUserId - The ID of the User that the source User is requesting to unblock. 
*/
export const usersIdUnblock: ApiHeroEndpoint<
  { sourceUserId: string; targetUserId: string },
  BlockUserMutationResponse
> = {
  id: "usersIdUnblock",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Unfollow User
* Causes the source User to unfollow the target User. The source User must match the User context authorizing the request
* @param sourceUserId - The ID of the authenticated source User that is requesting to unfollow the target User.
* @param targetUserId - The ID of the User that the source User is requesting to unfollow. 
*/
export const usersIdUnfollow: ApiHeroEndpoint<
  { sourceUserId: string; targetUserId: string },
  UsersFollowingDeleteResponse
> = {
  id: "usersIdUnfollow",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Unmute User by User ID
* Causes the source User to unmute the target User. The source User must match the User context authorizing the request
* @param targetUserId - The ID of the User that the source User is requesting to unmute.
* @param sourceUserId - The ID of the authenticated source User that is requesting to unmute the target User. 
*/
export const usersIdUnmute: ApiHeroEndpoint<
  { targetUserId: string; sourceUserId: string },
  MuteUserMutationResponse
> = {
  id: "usersIdUnmute",
  clientId: "twitter",
  version: "1.0.1",
};
