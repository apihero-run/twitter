import {
  AddOrDeleteRulesRequest,
  AddOrDeleteRulesResponse,
  FilteredStreamingTweetResponse,
  Get2ListsIdTweetsResponse,
  Get2SpacesIdBuyersResponse,
  Get2SpacesIdTweetsResponse,
  Get2TweetsCountsAllResponse,
  Get2TweetsCountsRecentResponse,
  Get2TweetsIdQuoteTweetsResponse,
  Get2TweetsIdResponse,
  Get2TweetsResponse,
  Get2TweetsSample10StreamResponse,
  Get2TweetsSearchAllResponse,
  Get2TweetsSearchRecentResponse,
  Get2UsersIdLikedTweetsResponse,
  Get2UsersIdMentionsResponse,
  Get2UsersIdTimelinesReverseChronologicalResponse,
  Get2UsersIdTweetsResponse,
  RuleId,
  RulesLookupResponse,
  StreamingTweetResponse,
  TweetCreateRequest,
  TweetCreateResponse,
  TweetDeleteResponse,
  TweetHideRequest,
  TweetHideResponse,
  TweetId,
  UsersLikesCreateRequest,
  UsersLikesCreateResponse,
  UsersLikesDeleteResponse,
  UsersRetweetsCreateRequest,
  UsersRetweetsCreateResponse,
  UsersRetweetsDeleteResponse,
  ApiHeroEndpoint,
} from "./@types";

/** 


* List Tweets timeline by List ID.
* Returns a list of Tweets associated with the provided List ID.
* @param id - The ID of the List.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [maxResults=100] - The maximum number of results.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const listsIdTweets: ApiHeroEndpoint<
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
    paginationToken?: string;
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
    maxResults?: number;
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
  },
  Get2ListsIdTweetsResponse
> = {
  id: "listsIdTweets",
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
  Get2SpacesIdBuyersResponse
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
  Get2SpacesIdTweetsResponse
> = {
  id: "spaceTweets",
  clientId: "twitter",
};

/** 


* Tweet lookup by Tweet IDs
* Returns a variety of information about the Tweet specified by the requested ID.
* @param ids - A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findTweetsById: ApiHeroEndpoint<
  {
    ids: Array<TweetId>;
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
  },
  Get2TweetsResponse
> = {
  id: "findTweetsById",
  clientId: "twitter",
};

/** 


* Creation of a Tweet
* Causes the User to create a Tweet under the authorized account. 
*/
export const createTweet: ApiHeroEndpoint<{ tweet: TweetCreateRequest }, TweetCreateResponse> = {
  id: "createTweet",
  clientId: "twitter",
};

/** 


* Full archive search counts
* Returns Tweet Counts that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [searchCountFields] - A comma separated list of SearchCount fields to display.
* @param [granularity] - The granularity for the search counts results.
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetCountsFullArchiveSearch: ApiHeroEndpoint<
  {
    query: string;
    endTime?: string;
    paginationToken?: string;
    sinceId?: string;
    searchCountFields?: Array<"end" | "start" | "tweet_count">;
    granularity?: "minute" | "hour" | "day";
    untilId?: string;
    startTime?: string;
    nextToken?: string;
  },
  Get2TweetsCountsAllResponse
> = {
  id: "tweetCountsFullArchiveSearch",
  clientId: "twitter",
};

/** 


* Recent search counts
* Returns Tweet Counts from the last 7 days that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [granularity] - The granularity for the search counts results.
* @param [searchCountFields] - A comma separated list of SearchCount fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). 
*/
export const tweetCountsRecentSearch: ApiHeroEndpoint<
  {
    query: string;
    untilId?: string;
    nextToken?: string;
    granularity?: "minute" | "hour" | "day";
    searchCountFields?: Array<"end" | "start" | "tweet_count">;
    startTime?: string;
    sinceId?: string;
    paginationToken?: string;
    endTime?: string;
  },
  Get2TweetsCountsRecentResponse
> = {
  id: "tweetCountsRecentSearch",
  clientId: "twitter",
};

/** 


* Firehose stream
* Streams 100% of public Tweets.
* @param partition - The partition number.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [backfillMinutes] - The number of minutes of backfill requested.
* @param [expansions] - A comma separated list of fields to expand.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. 
*/
export const getTweetsFirehoseStream: ApiHeroEndpoint<
  {
    partition: number;
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
    startTime?: string;
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
    backfillMinutes?: number;
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
    endTime?: string;
  },
  StreamingTweetResponse
> = {
  id: "getTweetsFirehoseStream",
  clientId: "twitter",
};

/** 


* Sample stream
* Streams a deterministic 1% of public Tweets.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const sampleStream: ApiHeroEndpoint<
  {
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
    backfillMinutes?: number;
  },
  StreamingTweetResponse
> = {
  id: "sampleStream",
  clientId: "twitter",
};

/** 


* Sample 10% stream
* Streams a deterministic 10% of public Tweets.
* @param partition - The partition number.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const getTweetsSample10Stream: ApiHeroEndpoint<
  {
    partition: number;
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
    endTime?: string;
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
    startTime?: string;
    backfillMinutes?: number;
  },
  Get2TweetsSample10StreamResponse
> = {
  id: "getTweetsSample10Stream",
  clientId: "twitter",
};

/** 


* Full-archive search
* Returns Tweets that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [userFields] - A comma separated list of User fields to display.
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [maxResults=10] - The maximum number of search results to be returned by a request.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [sortOrder] - This order in which to return results.
* @param [expansions] - A comma separated list of fields to expand.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetsFullarchiveSearch: ApiHeroEndpoint<
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
    sinceId?: string;
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
    maxResults?: number;
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
    startTime?: string;
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
    sortOrder?: "recency" | "relevancy";
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
    endTime?: string;
    untilId?: string;
    nextToken?: string;
  },
  Get2TweetsSearchAllResponse
> = {
  id: "tweetsFullarchiveSearch",
  clientId: "twitter",
};

/** 


* Recent search
* Returns Tweets from the last 7 days that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [sortOrder] - This order in which to return results.
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [maxResults=10] - The maximum number of search results to be returned by a request.
* @param [expansions] - A comma separated list of fields to expand.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID. 
*/
export const tweetsRecentSearch: ApiHeroEndpoint<
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
    sortOrder?: "recency" | "relevancy";
    sinceId?: string;
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
    startTime?: string;
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
    maxResults?: number;
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
    nextToken?: string;
    endTime?: string;
    untilId?: string;
  },
  Get2TweetsSearchRecentResponse
> = {
  id: "tweetsRecentSearch",
  clientId: "twitter",
};

/** 


* Filtered stream
* Streams Tweets matching the stream's active rule set.
* @param [userFields] - A comma separated list of User fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const searchStream: ApiHeroEndpoint<
  {
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
    startTime?: string;
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
    endTime?: string;
    backfillMinutes?: number;
  },
  FilteredStreamingTweetResponse
> = {
  id: "searchStream",
  clientId: "twitter",
};

/** 


* Rules lookup
* Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
* @param [ids] - A comma-separated list of Rule IDs.
* @param [maxResults=1000] - The maximum number of results.
* @param [paginationToken] - This value is populated by passing the 'next_token' returned in a request to paginate through results. 
*/
export const getRules: ApiHeroEndpoint<
  { ids?: Array<RuleId>; maxResults?: number; paginationToken?: string },
  RulesLookupResponse
> = {
  id: "getRules",
  clientId: "twitter",
};

/** 


* Add/Delete rules
* Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
* @param [dryRun] - Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes. 
*/
export const addOrDeleteRules: ApiHeroEndpoint<
  { rule: AddOrDeleteRulesRequest; dryRun?: boolean },
  AddOrDeleteRulesResponse
> = {
  id: "addOrDeleteRules",
  clientId: "twitter",
};

/** 


* Tweet lookup by Tweet ID
* Returns a variety of information about the Tweet specified by the requested ID.
* @param id - A single Tweet ID.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const findTweetById: ApiHeroEndpoint<
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
  },
  Get2TweetsIdResponse
> = {
  id: "findTweetById",
  clientId: "twitter",
};

/** 


* Tweet delete by Tweet ID
* Delete specified Tweet (in the path) by ID.
* @param id - The ID of the Tweet to be deleted. 
*/
export const deleteTweetById: ApiHeroEndpoint<{ id: string }, TweetDeleteResponse> = {
  id: "deleteTweetById",
  clientId: "twitter",
};

/** 


* Retrieve Tweets that quote a Tweet.
* Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.
* @param id - A single Tweet ID.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets').
* @param [maxResults=10] - The maximum number of results to be returned.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const findTweetsThatQuoteATweet: ApiHeroEndpoint<
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
    exclude?: Array<"replies" | "retweets">;
    maxResults?: number;
    paginationToken?: string;
  },
  Get2TweetsIdQuoteTweetsResponse
> = {
  id: "findTweetsThatQuoteATweet",
  clientId: "twitter",
};

/** 


* Hide replies
* Hides or unhides a reply to an owned conversation.
* @param tweetId - The ID of the reply that you want to hide or unhide. 
*/
export const hideReplyById: ApiHeroEndpoint<
  { tweetId: string; payload?: TweetHideRequest },
  TweetHideResponse
> = {
  id: "hideReplyById",
  clientId: "twitter",
};

/** 


* Returns Tweet objects liked by the provided User ID
* Returns a list of Tweets liked by the provided User ID
* @param id - The ID of the User to lookup.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [maxResults] - The maximum number of results.
* @param [expansions] - A comma separated list of fields to expand.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. 
*/
export const usersIdLikedTweets: ApiHeroEndpoint<
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
    maxResults?: number;
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
    paginationToken?: string;
  },
  Get2UsersIdLikedTweetsResponse
> = {
  id: "usersIdLikedTweets",
  clientId: "twitter",
};

/** 


* Causes the User (in the path) to like the specified Tweet
* Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.
* @param id - The ID of the authenticated source User that is requesting to like the Tweet. 
*/
export const usersIdLike: ApiHeroEndpoint<
  { id: string; like?: UsersLikesCreateRequest },
  UsersLikesCreateResponse
> = {
  id: "usersIdLike",
  clientId: "twitter",
};

/** 


* Causes the User (in the path) to unlike the specified Tweet
* Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request
* @param tweetId - The ID of the Tweet that the User is requesting to unlike.
* @param id - The ID of the authenticated source User that is requesting to unlike the Tweet. 
*/
export const usersIdUnlike: ApiHeroEndpoint<
  { tweetId: string; id: string },
  UsersLikesDeleteResponse
> = {
  id: "usersIdUnlike",
  clientId: "twitter",
};

/** 


* User mention timeline by User ID
* Returns Tweet objects that mention username associated to the provided User ID
* @param id - The ID of the User to lookup.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [maxResults] - The maximum number of results.
* @param [expansions] - A comma separated list of fields to expand. 
*/
export const usersIdMentions: ApiHeroEndpoint<
  {
    id: string;
    endTime?: string;
    sinceId?: string;
    startTime?: string;
    untilId?: string;
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
    maxResults?: number;
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
  },
  Get2UsersIdMentionsResponse
> = {
  id: "usersIdMentions",
  clientId: "twitter",
};

/** 


* Causes the User (in the path) to retweet the specified Tweet.
* Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.
* @param id - The ID of the authenticated source User that is requesting to retweet the Tweet. 
*/
export const usersIdRetweets: ApiHeroEndpoint<
  { id: string; retweet?: UsersRetweetsCreateRequest },
  UsersRetweetsCreateResponse
> = {
  id: "usersIdRetweets",
  clientId: "twitter",
};

/** 


* Causes the User (in the path) to unretweet the specified Tweet
* Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request
* @param sourceTweetId - The ID of the Tweet that the User is requesting to unretweet.
* @param id - The ID of the authenticated source User that is requesting to retweet the Tweet. 
*/
export const usersIdUnretweets: ApiHeroEndpoint<
  { sourceTweetId: string; id: string },
  UsersRetweetsDeleteResponse
> = {
  id: "usersIdUnretweets",
  clientId: "twitter",
};

/** 


* User home timeline by User ID
* Returns Tweet objects that appears in the provided User ID's home timeline
* @param id - The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [maxResults] - The maximum number of results.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets'). 
*/
export const usersIdTimeline: ApiHeroEndpoint<
  {
    id: string;
    untilId?: string;
    paginationToken?: string;
    endTime?: string;
    startTime?: string;
    sinceId?: string;
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
    maxResults?: number;
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
    exclude?: Array<"replies" | "retweets">;
  },
  Get2UsersIdTimelinesReverseChronologicalResponse
> = {
  id: "usersIdTimeline",
  clientId: "twitter",
};

/** 


* User Tweets timeline by User ID
* Returns a list of Tweets authored by the provided User ID
* @param id - The ID of the User to lookup.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
* @param [maxResults] - The maximum number of results.
* @param [userFields] - A comma separated list of User fields to display.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets').
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. 
*/
export const usersIdTweets: ApiHeroEndpoint<
  {
    id: string;
    paginationToken?: string;
    sinceId?: string;
    startTime?: string;
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
    untilId?: string;
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
    exclude?: Array<"replies" | "retweets">;
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
    endTime?: string;
  },
  Get2UsersIdTweetsResponse
> = {
  id: "usersIdTweets",
  clientId: "twitter",
};
