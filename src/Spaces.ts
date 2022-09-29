import {
  Error,
  Get2SpacesByCreatorIdsResponse,
  Get2SpacesIdBuyersResponse,
  Get2SpacesIdResponse,
  Get2SpacesIdTweetsResponse,
  Get2SpacesResponse,
  Get2SpacesSearchResponse,
  UserId,
  ApiHeroEndpoint,
} from "./@types";

/** 


* Space lookup up Space IDs
* Returns a variety of information about the Spaces specified by the requested IDs
* @param ids - The list of Space IDs to return.
* @param [userFields] - A comma separated list of User fields to display.
* @param [spaceFields] - A comma separated list of Space fields to display.
* @param [topicFields] - A comma separated list of Topic fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findSpacesByIds: ApiHeroEndpoint<
  {
    ids: Array<string>;
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
    spaceFields?: Array<
      | "created_at"
      | "creator_id"
      | "ended_at"
      | "host_ids"
      | "id"
      | "invited_user_ids"
      | "is_ticketed"
      | "lang"
      | "participant_count"
      | "scheduled_start"
      | "speaker_ids"
      | "started_at"
      | "state"
      | "subscriber_count"
      | "title"
      | "topic_ids"
      | "updated_at"
    >;
    topicFields?: Array<"description" | "id" | "name">;
    expansions?: Array<
      "creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids"
    >;
  },
  Get2SpacesResponse | Error
> = {
  id: "findSpacesByIds",
  clientId: "twitter",
};

/** 


* Space lookup by their creators
* Returns a variety of information about the Spaces created by the provided User IDs
* @param userIds - The IDs of Users to search through.
* @param [userFields] - A comma separated list of User fields to display.
* @param [spaceFields] - A comma separated list of Space fields to display.
* @param [topicFields] - A comma separated list of Topic fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findSpacesByCreatorIds: ApiHeroEndpoint<
  {
    userIds: Array<UserId>;
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
    spaceFields?: Array<
      | "created_at"
      | "creator_id"
      | "ended_at"
      | "host_ids"
      | "id"
      | "invited_user_ids"
      | "is_ticketed"
      | "lang"
      | "participant_count"
      | "scheduled_start"
      | "speaker_ids"
      | "started_at"
      | "state"
      | "subscriber_count"
      | "title"
      | "topic_ids"
      | "updated_at"
    >;
    topicFields?: Array<"description" | "id" | "name">;
    expansions?: Array<
      "creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids"
    >;
  },
  Get2SpacesByCreatorIdsResponse | Error
> = {
  id: "findSpacesByCreatorIds",
  clientId: "twitter",
};

/** 


* Search for Spaces
* Returns Spaces that match the provided query.
* @param query - The search query.
* @param [userFields] - A comma separated list of User fields to display.
* @param [spaceFields] - A comma separated list of Space fields to display.
* @param [state] - The state of Spaces to search for.
* @param [topicFields] - A comma separated list of Topic fields to display.
* @param [maxResults=100] - The number of results to return.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const searchSpaces: ApiHeroEndpoint<
  {
    query: string;
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
    spaceFields?: Array<
      | "created_at"
      | "creator_id"
      | "ended_at"
      | "host_ids"
      | "id"
      | "invited_user_ids"
      | "is_ticketed"
      | "lang"
      | "participant_count"
      | "scheduled_start"
      | "speaker_ids"
      | "started_at"
      | "state"
      | "subscriber_count"
      | "title"
      | "topic_ids"
      | "updated_at"
    >;
    state?: "live" | "scheduled" | "all";
    topicFields?: Array<"description" | "id" | "name">;
    maxResults?: number;
    expansions?: Array<
      "creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids"
    >;
  },
  Get2SpacesSearchResponse | Error
> = {
  id: "searchSpaces",
  clientId: "twitter",
};

/** 


* Space lookup by Space ID
* Returns a variety of information about the Space specified by the requested ID
* @param id - The ID of the Space to be retrieved.
* @param [userFields] - A comma separated list of User fields to display.
* @param [spaceFields] - A comma separated list of Space fields to display.
* @param [topicFields] - A comma separated list of Topic fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findSpaceById: ApiHeroEndpoint<
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
    spaceFields?: Array<
      | "created_at"
      | "creator_id"
      | "ended_at"
      | "host_ids"
      | "id"
      | "invited_user_ids"
      | "is_ticketed"
      | "lang"
      | "participant_count"
      | "scheduled_start"
      | "speaker_ids"
      | "started_at"
      | "state"
      | "subscriber_count"
      | "title"
      | "topic_ids"
      | "updated_at"
    >;
    topicFields?: Array<"description" | "id" | "name">;
    expansions?: Array<
      "creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids"
    >;
  },
  Get2SpacesIdResponse | Error
> = {
  id: "findSpaceById",
  clientId: "twitter",
};

/** 


* Retrieve the list of Users who purchased a ticket to the given space
* Retrieves the list of Users who purchased a ticket to the given space
* @param id - The ID of the Space to be retrieved.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const spaceBuyers: ApiHeroEndpoint<
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
    maxResults?: number;
    expansions?: Array<"pinned_tweet_id">;
    paginationToken?: string;
  },
  Get2SpacesIdBuyersResponse | Error
> = {
  id: "spaceBuyers",
  clientId: "twitter",
};

/** 


* Retrieve Tweets from a Space.
* Retrieves Tweets shared in the specified Space.
* @param id - The ID of the Space to be retrieved.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [maxResults=100] - The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100. 
*/
export const spaceTweets: ApiHeroEndpoint<
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
  Get2SpacesIdTweetsResponse | Error
> = {
  id: "spaceTweets",
  clientId: "twitter",
};
