import {
  BookmarkAddRequest,
  BookmarkMutationResponse,
  Error,
  Get2UsersIdBookmarksResponse,
  ApiHeroEndpoint,
} from "./@types";

/** 


* Bookmarks by User
* Returns Tweet objects that have been bookmarked by the requesting User
* @param id - The ID of the authenticated source User for whom to return results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [maxResults] - The maximum number of results. 
*/
export const getUsersIdBookmarks: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    placeFields?: Array<
      | "contained_within"
      | "country"
      | "country_code"
      | "full_name"
      | "geo"
      | "id"
      | "name"
      | "place_type"
    >;
    paginationToken?: string;
    mediaFields?: Array<
      | "alt_text"
      | "duration_ms"
      | "height"
      | "media_key"
      | "non_public_metrics"
      | "organic_metrics"
      | "preview_image_url"
      | "promoted_metrics"
      | "public_metrics"
      | "type"
      | "url"
      | "variants"
      | "width"
    >;
    expansions?: Array<
      | "attachments.media_keys"
      | "attachments.poll_ids"
      | "author_id"
      | "entities.mentions.username"
      | "geo.place_id"
      | "in_reply_to_user_id"
      | "referenced_tweets.id"
      | "referenced_tweets.id.author_id"
    >;
    maxResults?: number;
  },
  Get2UsersIdBookmarksResponse | Error
> = {
  id: "getUsersIdBookmarks",
  clientId: "twitter",
};

/** 


* Add Tweet to Bookmarks
* Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks
* @param id - The ID of the authenticated source User for whom to add bookmarks. 
*/
export const postUsersIdBookmarks: ApiHeroEndpoint<
  { id: string; bookmark: BookmarkAddRequest },
  BookmarkMutationResponse | Error
> = {
  id: "postUsersIdBookmarks",
  clientId: "twitter",
};

/** 


* Remove a bookmarked Tweet
* Removes a Tweet from the requesting User's bookmarked Tweets.
* @param id - The ID of the authenticated source User whose bookmark is to be removed.
* @param tweetId - The ID of the Tweet that the source User is removing from bookmarks. 
*/
export const usersIdBookmarksDelete: ApiHeroEndpoint<
  { id: string; tweetId: string },
  BookmarkMutationResponse | Error
> = {
  id: "usersIdBookmarksDelete",
  clientId: "twitter",
};
