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
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [maxResults=100] - The maximum number of results.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display. 
*/
export const listsIdTweets: ApiHeroEndpoint<
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
    paginationToken?: string;
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
  },
  Get2ListsIdTweetsResponse
> = {
  id: "listsIdTweets",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Retrieve the list of Users who purchased a ticket to the given space
* Retrieves the list of Users who purchased a ticket to the given space
* @param id - The ID of the Space to be retrieved.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [maxResults=100] - The maximum number of results.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results. 
*/
export const spaceBuyers: ApiHeroEndpoint<
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
  Get2SpacesIdBuyersResponse
> = {
  id: "spaceBuyers",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Retrieve Tweets from a Space.
* Retrieves Tweets shared in the specified Space.
* @param id - The ID of the Space to be retrieved.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [maxResults=100] - The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display. 
*/
export const spaceTweets: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
  },
  Get2SpacesIdTweetsResponse
> = {
  id: "spaceTweets",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Tweet lookup by Tweet IDs
* Returns a variety of information about the Tweet specified by the requested ID.
* @param ids - A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display. 
*/
export const findTweetsById: ApiHeroEndpoint<
  {
    ids: Array<TweetId>;
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
  },
  Get2TweetsResponse
> = {
  id: "findTweetsById",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Creation of a Tweet
* Causes the User to create a Tweet under the authorized account. 
*/
export const createTweet: ApiHeroEndpoint<{ tweet: TweetCreateRequest }, TweetCreateResponse> = {
  id: "createTweet",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Full archive search counts
* Returns Tweet Counts that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [granularity] - The granularity for the search counts results.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [searchCountFields] - A comma separated list of SearchCount fields to display.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetCountsFullArchiveSearch: ApiHeroEndpoint<
  {
    query: string;
    startTime?: string;
    untilId?: string;
    granularity?: "minute" | "hour" | "day";
    nextToken?: string;
    searchCountFields?: Array<"end" | "start" | "tweet_count">;
    endTime?: string;
    sinceId?: string;
    paginationToken?: string;
  },
  Get2TweetsCountsAllResponse
> = {
  id: "tweetCountsFullArchiveSearch",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Recent search counts
* Returns Tweet Counts from the last 7 days that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [searchCountFields] - A comma separated list of SearchCount fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [granularity] - The granularity for the search counts results.
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetCountsRecentSearch: ApiHeroEndpoint<
  {
    query: string;
    endTime?: string;
    nextToken?: string;
    searchCountFields?: Array<"end" | "start" | "tweet_count">;
    startTime?: string;
    sinceId?: string;
    granularity?: "minute" | "hour" | "day";
    untilId?: string;
    paginationToken?: string;
  },
  Get2TweetsCountsRecentResponse
> = {
  id: "tweetCountsRecentSearch",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Firehose stream
* Streams 100% of public Tweets.
* @param partition - The partition number.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [backfillMinutes] - The number of minutes of backfill requested.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. 
*/
export const getTweetsFirehoseStream: ApiHeroEndpoint<
  {
    partition: number;
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
    backfillMinutes?: number;
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
    endTime?: string;
  },
  StreamingTweetResponse
> = {
  id: "getTweetsFirehoseStream",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Sample stream
* Streams a deterministic 1% of public Tweets.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [backfillMinutes] - The number of minutes of backfill requested.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display. 
*/
export const sampleStream: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
  },
  StreamingTweetResponse
> = {
  id: "sampleStream",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Sample 10% stream
* Streams a deterministic 10% of public Tweets.
* @param partition - The partition number.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const getTweetsSample10Stream: ApiHeroEndpoint<
  {
    partition: number;
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
    endTime?: string;
    backfillMinutes?: number;
  },
  Get2TweetsSample10StreamResponse
> = {
  id: "getTweetsSample10Stream",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Full-archive search
* Returns Tweets that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [sortOrder] - This order in which to return results.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [maxResults=10] - The maximum number of search results to be returned by a request.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetsFullarchiveSearch: ApiHeroEndpoint<
  {
    query: string;
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
    sinceId?: string;
    sortOrder?: "recency" | "relevancy";
    startTime?: string;
    untilId?: string;
    paginationToken?: string;
    endTime?: string;
    maxResults?: number;
    nextToken?: string;
  },
  Get2TweetsSearchAllResponse
> = {
  id: "tweetsFullarchiveSearch",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Recent search
* Returns Tweets from the last 7 days that match a search query.
* @param query - One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
* @param [sinceId] - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
* @param [sortOrder] - This order in which to return results.
* @param [untilId] - Returns results with a Tweet ID less than (that is, older than) the specified ID.
* @param [nextToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
* @param [maxResults=10] - The maximum number of search results to be returned by a request.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. 
*/
export const tweetsRecentSearch: ApiHeroEndpoint<
  {
    query: string;
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
    sinceId?: string;
    sortOrder?: "recency" | "relevancy";
    untilId?: string;
    nextToken?: string;
    endTime?: string;
    maxResults?: number;
    paginationToken?: string;
  },
  Get2TweetsSearchRecentResponse
> = {
  id: "tweetsRecentSearch",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Filtered stream
* Streams Tweets matching the stream's active rule set.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const searchStream: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    endTime?: string;
    backfillMinutes?: number;
  },
  FilteredStreamingTweetResponse
> = {
  id: "searchStream",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Rules lookup
* Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
* @param [paginationToken] - This value is populated by passing the 'next_token' returned in a request to paginate through results.
* @param [ids] - A comma-separated list of Rule IDs.
* @param [maxResults=1000] - The maximum number of results. 
*/
export const getRules: ApiHeroEndpoint<
  { paginationToken?: string; ids?: Array<RuleId>; maxResults?: number },
  RulesLookupResponse
> = {
  id: "getRules",
  clientId: "twitter",
  version: "1.0.1",
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
  version: "1.0.1",
};

/** 


* Tweet lookup by Tweet ID
* Returns a variety of information about the Tweet specified by the requested ID.
* @param id - A single Tweet ID.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display. 
*/
export const findTweetById: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
  },
  Get2TweetsIdResponse
> = {
  id: "findTweetById",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Tweet delete by Tweet ID
* Delete specified Tweet (in the path) by ID.
* @param id - The ID of the Tweet to be deleted. 
*/
export const deleteTweetById: ApiHeroEndpoint<{ id: string }, TweetDeleteResponse> = {
  id: "deleteTweetById",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* Retrieve Tweets that quote a Tweet.
* Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.
* @param id - A single Tweet ID.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [paginationToken] - This parameter is used to get a specified 'page' of results.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets').
* @param [maxResults=10] - The maximum number of results to be returned. 
*/
export const findTweetsThatQuoteATweet: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    exclude?: Array<"replies" | "retweets">;
    maxResults?: number;
  },
  Get2TweetsIdQuoteTweetsResponse
> = {
  id: "findTweetsThatQuoteATweet",
  clientId: "twitter",
  version: "1.0.1",
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
  version: "1.0.1",
};

/** 


* Returns Tweet objects liked by the provided User ID
* Returns a list of Tweets liked by the provided User ID
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [maxResults] - The maximum number of results.
* @param [paginationToken] - This parameter is used to get the next 'page' of results. 
*/
export const usersIdLikedTweets: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    paginationToken?: string;
  },
  Get2UsersIdLikedTweetsResponse
> = {
  id: "usersIdLikedTweets",
  clientId: "twitter",
  version: "1.0.1",
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
  version: "1.0.1",
};

/** 


* Causes the User (in the path) to unlike the specified Tweet
* Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request
* @param id - The ID of the authenticated source User that is requesting to unlike the Tweet.
* @param tweetId - The ID of the Tweet that the User is requesting to unlike. 
*/
export const usersIdUnlike: ApiHeroEndpoint<
  { id: string; tweetId: string },
  UsersLikesDeleteResponse
> = {
  id: "usersIdUnlike",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User mention timeline by User ID
* Returns Tweet objects that mention username associated to the provided User ID
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [maxResults] - The maximum number of results.
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. 
*/
export const usersIdMentions: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    untilId?: string;
    maxResults?: number;
    sinceId?: string;
    paginationToken?: string;
    endTime?: string;
    startTime?: string;
  },
  Get2UsersIdMentionsResponse
> = {
  id: "usersIdMentions",
  clientId: "twitter",
  version: "1.0.1",
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
  version: "1.0.1",
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
  version: "1.0.1",
};

/** 


* User home timeline by User ID
* Returns Tweet objects that appears in the provided User ID's home timeline
* @param id - The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [maxResults] - The maximum number of results.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets'). 
*/
export const usersIdTimeline: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    untilId?: string;
    paginationToken?: string;
    endTime?: string;
    sinceId?: string;
    maxResults?: number;
    startTime?: string;
    exclude?: Array<"replies" | "retweets">;
  },
  Get2UsersIdTimelinesReverseChronologicalResponse
> = {
  id: "usersIdTimeline",
  clientId: "twitter",
  version: "1.0.1",
};

/** 


* User Tweets timeline by User ID
* Returns a list of Tweets authored by the provided User ID
* @param id - The ID of the User to lookup.
* @param [tweetFields] - A comma separated list of Tweet fields to display.
* @param [pollFields] - A comma separated list of Poll fields to display.
* @param [userFields] - A comma separated list of User fields to display.
* @param [expansions] - A comma separated list of fields to expand.
* @param [mediaFields] - A comma separated list of Media fields to display.
* @param [placeFields] - A comma separated list of Place fields to display.
* @param [untilId] - The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
* @param [exclude] - The set of entities to exclude (e.g. 'replies' or 'retweets').
* @param [sinceId] - The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
* @param [paginationToken] - This parameter is used to get the next 'page' of results.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
* @param [maxResults] - The maximum number of results.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. 
*/
export const usersIdTweets: ApiHeroEndpoint<
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
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
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
    untilId?: string;
    exclude?: Array<"replies" | "retweets">;
    sinceId?: string;
    paginationToken?: string;
    startTime?: string;
    maxResults?: number;
    endTime?: string;
  },
  Get2UsersIdTweetsResponse
> = {
  id: "usersIdTweets",
  clientId: "twitter",
  version: "1.0.1",
};
