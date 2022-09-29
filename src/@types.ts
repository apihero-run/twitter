export type { ApiHeroEndpoint } from "@apihero/core";

/**
 * The end time of the bucket.
 */
export type End = string;

export type Geo = {
  bbox: Array<number>;
  type: "Feature";
  geometry?: Point;
  properties: {};
};

/**
 * A validly formatted URL.
 */
export type Url = string;

/**
 * A Twitter List is a curated group of accounts.
 */
export type List = {
  id: ListId;

  /**
   * The name of this List.
   */
  name: string;
  private?: boolean;
  owner_id?: UserId;
  created_at?: string;
  description?: string;
  member_count?: number;
  follower_count?: number;
};

/**
 * Represent a Poll attached to a Tweet.
 */
export type Poll = {
  id: PollId;
  options: Array<PollOption>;
  end_datetime?: string;
  voting_status?: "open" | "closed";
  duration_minutes?: number;
};

/**
 * A user-provided stream filtering rule.
 */
export type Rule = {
  id?: RuleId;
  tag?: RuleTag;
  value: RuleValue;
};

/**
 * The Twitter User object.
 */
export type User = {
  id: UserId;

  /**
   * The URL specified in the User's profile.
   */
  url?: string;

  /**
   * The friendly name of this User, as shown on their profile.
   */
  name: string;

  /**
   * A list of metadata found in the User's profile description.
   */
  entities?: {
    /**
     * Expanded details for the URL specified in the User's profile, with start and end indices.
     */
    url?: {
      urls?: Array<UrlEntity>;
    };
    description?: FullTextEntities;
  };

  /**
   * The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
   */
  location?: string;
  username: UserName;

  /**
   * Indicate if this User is a verified Twitter User.
   */
  verified?: boolean;
  withheld?: UserWithheld;

  /**
   * Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private).
   */
  protected?: boolean;

  /**
   * Creation time of this User.
   */
  created_at?: string;

  /**
   * The text of this User's profile description (also known as bio), if the User provided one.
   */
  description?: string;

  /**
   * A list of metrics for this User.
   */
  public_metrics?: {
    /**
     * The number of Tweets (including Retweets) posted by this User.
     */
    tweet_count: number;

    /**
     * The number of lists that include this User.
     */
    listed_count: number;

    /**
     * Number of Users who are following this User.
     */
    followers_count: number;

    /**
     * Number of Users this User is following.
     */
    following_count: number;
  };
  pinned_tweet_id?: TweetId;

  /**
   * The URL to the profile image for this User.
   */
  profile_image_url?: string;
};

export type Error = {
  code: number;
  message: string;
};

/**
 * Compliance Job ID.
 */
export type JobId = string;

export type Media = {
  type: string;
  width?: MediaWidth;
  height?: MediaHeight;
  media_key?: MediaKey;
};

export type Photo = Media & {
  url?: string;
  alt_text?: string;
};

export type Place = {
  id: PlaceId;
  geo?: Geo;

  /**
   * The human readable name of this place.
   */
  name?: string;

  /**
   * The full name of the county in which this place exists.
   */
  country?: string;

  /**
   * The full name of this place.
   */
  full_name: string;
  place_type?: PlaceType;
  country_code?: CountryCode;
  contained_within?: Array<PlaceId>;
};

/**
 * A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
 */
export type Point = {
  type: "Point";
  coordinates: Position;
};

export type Space = {
  id: SpaceId;

  /**
   * The language of the Space.
   */
  lang?: string;

  /**
   * The current state of the Space.
   */
  state: "live" | "scheduled" | "ended";

  /**
   * The title of the Space.
   */
  title?: string;

  /**
   * The topics of a Space, as selected by its creator.
   * The Twitter Topic object.
   */
  topics?: Array<{
    /**
     * An ID suitable for use in the REST API.
     */
    id: string;

    /**
     * The name of the given topic.
     */
    name: string;

    /**
     * The description of the given topic.
     */
    description?: string;
  }>;

  /**
   * End time of the Space.
   */
  ended_at?: string;

  /**
   * The user ids for the hosts of the Space.
   */
  host_ids?: Array<UserId>;

  /**
   * Creation time of the Space.
   */
  created_at?: string;
  creator_id?: UserId;

  /**
   * When the Space was started as a date string.
   */
  started_at?: string;

  /**
   * When the Space was last updated.
   */
  updated_at?: string;

  /**
   * Denotes if the Space is a ticketed Space.
   */
  is_ticketed?: boolean;

  /**
   * An array of user ids for people who were speakers in a Space.
   */
  speaker_ids?: Array<UserId>;

  /**
   * A date time stamp for when a Space is scheduled to begin.
   */
  scheduled_start?: string;

  /**
   * An array of user ids for people who were invited to a Space.
   */
  invited_user_ids?: Array<UserId>;

  /**
   * The number of people who have either purchased a ticket or set a reminder for this Space.
   */
  subscriber_count?: number;

  /**
   * The number of participants in a Space.
   */
  participant_count?: number;
};

/**
 * The start time of the bucket.
 */
export type Start = string;

/**
 * The topic of a Space, as selected by its creator.
 */
export type Topic = {
  id: TopicId;

  /**
   * The name of the given topic.
   */
  name: string;

  /**
   * The description of the given topic.
   */
  description?: string;
};

export type Tweet = {
  id: TweetId;

  /**
   * The location tagged on the Tweet, if the user provided one.
   */
  geo?: {
    place_id?: PlaceId;
    coordinates?: Point;
  };

  /**
   * Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
   */
  lang?: string;
  text: TweetText;

  /**
   * The name of the app the user Tweeted from.
   */
  source?: string;
  entities?: FullTextEntities;
  withheld?: TweetWithheld;
  author_id?: UserId;

  /**
   * Creation time of the Tweet.
   */
  created_at?: string;

  /**
   * Specifies the type of attachments (if any) present in this Tweet.
   */
  attachments?: {
    /**
     * A list of poll IDs (if polls are attached).
     */
    poll_ids?: Array<PollId>;

    /**
     * A list of Media Keys for each one of the media attachments (if media are attached).
     */
    media_keys?: Array<MediaKey>;
  };

  /**
   * Engagement metrics for the Tweet at the time of the request.
   */
  public_metrics?: {
    /**
     * Number of times this Tweet has been liked.
     */
    like_count: number;

    /**
     * Number of times this Tweet has been quoted.
     */
    quote_count?: number;

    /**
     * Number of times this Tweet has been replied to.
     */
    reply_count: number;

    /**
     * Number of times this Tweet has been Retweeted.
     */
    retweet_count: number;
  };
  reply_settings?: ReplySettings;
  conversation_id?: TweetId;

  /**
   * Organic nonpublic engagement metrics for the Tweet at the time of the request.
   */
  organic_metrics?: {
    /**
     * Number of times this Tweet has been liked.
     */
    like_count: number;

    /**
     * Number of times this Tweet has been replied to.
     */
    reply_count: number;

    /**
     * Number of times this Tweet has been Retweeted.
     */
    retweet_count: number;

    /**
     * Number of times this Tweet has been viewed.
     */
    impression_count: number;
  };

  /**
   * Promoted nonpublic engagement metrics for the Tweet at the time of the request.
   */
  promoted_metrics?: {
    /**
     * Number of times this Tweet has been liked.
     */
    like_count?: number;

    /**
     * Number of times this Tweet has been replied to.
     */
    reply_count?: number;

    /**
     * Number of times this Tweet has been Retweeted.
     */
    retweet_count?: number;

    /**
     * Number of times this Tweet has been viewed.
     */
    impression_count?: number;
  };

  /**
   * A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
   */
  referenced_tweets?: Array<{
    id: TweetId;
    type: "retweeted" | "quoted" | "replied_to";
  }>;

  /**
   * Nonpublic engagement metrics for the Tweet at the time of the request.
   */
  non_public_metrics?: {
    /**
     * Number of times this Tweet has been viewed.
     */
    impression_count?: number;
  };

  /**
   * Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
   */
  possibly_sensitive?: boolean;
  context_annotations?: Array<ContextAnnotation>;
  in_reply_to_user_id?: UserId;
};

export type Video = Media & {
  variants?: Variants;
  duration_ms?: number;

  /**
   * Engagement metrics for the Media at the time of the request.
   */
  public_metrics?: {
    /**
     * Number of times this video has been viewed.
     */
    view_count?: number;
  };

  /**
   * Organic nonpublic engagement metrics for the Media at the time of the request.
   */
  organic_metrics?: {
    /**
     * Number of times this video has been viewed.
     */
    view_count?: number;

    /**
     * Number of users who made it through 0% of the video.
     */
    playback_0_count?: number;

    /**
     * Number of users who made it through 25% of the video.
     */
    playback_25_count?: number;

    /**
     * Number of users who made it through 50% of the video.
     */
    playback_50_count?: number;

    /**
     * Number of users who made it through 75% of the video.
     */
    playback_75_count?: number;

    /**
     * Number of users who made it through 100% of the video.
     */
    playback_100_count?: number;
  };

  /**
   * Promoted nonpublic engagement metrics for the Media at the time of the request.
   */
  promoted_metrics?: {
    /**
     * Number of times this video has been viewed.
     */
    view_count?: number;

    /**
     * Number of users who made it through 0% of the video.
     */
    playback_0_count?: number;

    /**
     * Number of users who made it through 25% of the video.
     */
    playback_25_count?: number;

    /**
     * Number of users who made it through 50% of the video.
     */
    playback_50_count?: number;

    /**
     * Number of users who made it through 75% of the video.
     */
    playback_75_count?: number;

    /**
     * Number of users who made it through 100% of the video.
     */
    playback_100_count?: number;
  };
  preview_image_url?: string;

  /**
   * Nonpublic engagement metrics for the Media at the time of the request.
   */
  non_public_metrics?: {
    /**
     * Number of users who made it through 0% of the video.
     */
    playback_0_count?: number;

    /**
     * Number of users who made it through 25% of the video.
     */
    playback_25_count?: number;

    /**
     * Number of users who made it through 50% of the video.
     */
    playback_50_count?: number;

    /**
     * Number of users who made it through 75% of the video.
     */
    playback_75_count?: number;

    /**
     * Number of users who made it through 100% of the video.
     */
    playback_100_count?: number;
  };
};

/**
 * The unique identifier of this List.
 */
export type ListId = string;

/**
 * Unique identifier of this poll.
 */
export type PollId = string;

/**
 * Unique identifier of this rule.
 */
export type RuleId = string;

/**
 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
 */
export type UserId = string;

/**
 * The unique identifier of this Media.
 */
export type MediaId = string;

/**
 * The identifier for this place.
 */
export type PlaceId = string;

/**
 * An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).
 */
export type Problem = {
  type: string;
  title: string;
  detail?: string;
  status?: number;
};

/**
 * A tag meant for the labeling of user provided rules.
 */
export type RuleTag = string;

/**
 * The unique identifier of this Space.
 */
export type SpaceId = string;

/**
 * Unique identifier of this Topic.
 */
export type TopicId = string;

/**
 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
 */
export type TweetId = string;

export type Variant = {
  /**
   * The url to the media.
   */
  url?: string;

  /**
   * The bit rate of the media.
   */
  bit_rate?: number;

  /**
   * The content type of the media.
   */
  content_type?: string;
};

/**
 * The Media Key identifier for this attachment.
 */
export type MediaKey = string;

/**
 * The newest id in this response.
 */
export type NewestId = string;

/**
 * The oldest id in this response.
 */
export type OldestId = string;

/**
 * A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
 */
export type Position = Array<number>;

export type Problems = Array<Problem>;

/**
 * A user-provided stream filtering rule.
 */
export type RuleNoId = {
  tag?: RuleTag;
  value: RuleValue;
};

/**
 * Represent the information for the URL image.
 */
export type UrlImage = {
  url?: Url;
  width?: MediaWidth;
  height?: MediaHeight;
};

/**
 * The Twitter handle (screen name) of this user.
 */
export type UserName = string;

/**
 * An array of all available variants of the media.
 */
export type Variants = Array<Variant>;

/**
 * The sum of results returned in this response.
 */
export type Aggregate = number;

/**
 * Creation time of the compliance job.
 */
export type CreatedAt = string;

/**
 * The next token.
 */
export type NextToken = string;

export type PlaceType = "poi" | "neighborhood" | "city" | "admin" | "country" | "unknown";

/**
 * The filterlang value of the rule.
 */
export type RuleValue = string;

/**
 * The content of the Tweet.
 */
export type TweetText = string;

/**
 * URL to which the user will upload their Tweet or user IDs.
 */
export type UploadUrl = string;

/**
 * Represent the portion of text recognized as a URL, and its start and end position within the text.
 */
export type UrlEntity = EntityIndicesInclusiveExclusive & UrlFields;

/**
 * Represent the portion of text recognized as a URL.
 */
export type UrlFields = {
  url: Url;

  /**
   * Title of the page the URL points to.
   */
  title?: string;
  images?: Array<UrlImage>;
  status?: HttpStatusCode;
  media_key?: MediaKey;

  /**
   * Description of the URL landing page.
   */
  description?: string;

  /**
   * The URL as displayed in the Twitter client.
   */
  display_url?: string;

  /**
   * Fully resolved url.
   */
  unwound_url?: string;
  expanded_url?: Url;
};

export type Expansions = {
  media?: Array<Media>;
  polls?: Array<Poll>;
  users?: Array<User>;
  places?: Array<Place>;
  topics?: Array<Topic>;
  tweets?: Array<Tweet>;
};

/**
 * The width of the media in pixels.
 */
export type MediaWidth = number;

/**
 * Describes a choice in a Poll object.
 */
export type PollOption = {
  label: PollOptionLabel;

  /**
   * Number of users who voted for this choice.
   */
  votes: number;

  /**
   * Position of this choice in the poll.
   */
  position: number;
};

/**
 * The count for the bucket.
 */
export type TweetCount = number;

export type AnimatedGif = Media & {
  variants?: Variants;
  preview_image_url?: string;
};

/**
 * A two-letter ISO 3166-1 alpha-2 country code.
 */
export type CountryCode = string;

/**
 * URL from which the user will retrieve their compliance results.
 */
export type DownloadUrl = string;

/**
 * The height of the media in pixels.
 */
export type MediaHeight = number;

/**
 * The number of results returned in this response.
 */
export type ResultCount = number;

/**
 * Represent a Search Count Result.
 */
export type SearchCount = {
  end: End;
  start: Start;
  tweet_count: TweetCount;
};

/**
 * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export type UserWithheld = {
  /**
   * Indicates that the content being withheld is a `user`.
   */
  scope?: "user";

  /**
   * Provides a list of countries where this content is not available.
   */
  country_codes: Array<CountryCode>;
};

export type CashtagEntity = EntityIndicesInclusiveExclusive & CashtagFields;

/**
 * Represent the portion of text recognized as a Cashtag, and its start and end position within the text.
 */
export type CashtagFields = {
  tag: string;
};

export type ComplianceJob = {
  id: JobId;
  name?: ComplianceJobName;
  type: ComplianceJobType;
  status: ComplianceJobStatus;
  created_at: CreatedAt;
  upload_url: UploadUrl;
  download_url: DownloadUrl;
  upload_expires_at: UploadExpiration;
  download_expires_at: DownloadExpiration;
};

export type HashtagEntity = EntityIndicesInclusiveExclusive & HashtagFields;

/**
 * Represent the portion of text recognized as a Hashtag, and its start and end position within the text.
 */
export type HashtagFields = {
  /**
   * The text of the Hashtag.
   */
  tag: string;
};

export type MentionEntity = EntityIndicesInclusiveExclusive & MentionFields;

/**
 * Represent the portion of text recognized as a User mention, and its start and end position within the text.
 */
export type MentionFields = {
  id?: UserId;
  username: UserName;
};

/**
 * The previous token.
 */
export type PreviousToken = string;

export type ProblemErrors = {
  errors: Problems;
};

/**
 * Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.
 */
export type ReplySettings = "everyone" | "mentionedUsers" | "following" | "other";

/**
 * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export type TweetWithheld = {
  /**
   * Indicates whether the content being withheld is the `tweet` or a `user`.
   */
  scope?: "tweet" | "user";

  /**
   * Indicates if the content is being withheld for on the basis of copyright infringement.
   */
  copyright: boolean;

  /**
   * Provides a list of countries where this content is not available.
   */
  country_codes: Array<CountryCode>;
};

/**
 * A generic problem with no additional information beyond that provided by the HTTP status code.
 */
export type GenericProblem = Problem;

/**
 * HTTP Status Code.
 */
export type HttpStatusCode = number;

/**
 * Represents the response in case of throwing an exception. Mainly for the openapi-generator
 */
export type ProblemOrError = Error | Problem;

/**
 * A request to add a user-specified stream filtering rule.
 */
export type AddRulesRequest = {
  add: Array<RuleNoId>;
};

/**
 * You cannot create a new job if one is already in progress.
 */
export type ConflictProblem = Problem;

export type MuteUserRequest = {
  target_user_id: UserId;
};

/**
 * The text of a poll choice.
 */
export type PollOptionLabel = string;

/**
 * You have exceeded the maximum number of rules.
 */
export type RulesCapProblem = Problem;

export type BlockUserRequest = {
  target_user_id: UserId;
};

export type FullTextEntities = {
  urls?: Array<UrlEntity>;
  cashtags?: Array<CashtagEntity>;
  hashtags?: Array<HashtagEntity>;
  mentions?: Array<MentionEntity>;

  /**
   * Annotation for entities based on the Tweet text.
   */
  annotations?: Array<
    EntityIndicesInclusiveInclusive & {
      /**
       * Annotation type.
       */
      type?: string;

      /**
       * Confidence factor for annotation type.
       */
      probability?: number;

      /**
       * Text used to determine annotation.
       */
      normalized_text?: string;
    }
  >;
};

export type TweetHideRequest = {
  hidden: boolean;
};

/**
 * Expiration time of the upload URL.
 */
export type UploadExpiration = string;

/**
 * User-provided name for a compliance job.
 */
export type ComplianceJobName = string;

/**
 * Type of compliance job to list.
 */
export type ComplianceJobType = "tweets" | "users";

/**
 * Annotation inferred from the Tweet text.
 */
export type ContextAnnotation = {
  domain: ContextAnnotationDomainFields;
  entity: ContextAnnotationEntityFields;
};

export type Get2UsersResponse = {
  data?: Array<User>;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type ListCreateRequest = {
  name: string;
  private?: boolean;
  description?: string;
};

export type ListPinnedRequest = {
  list_id: ListId;
};

export type ListUnpinResponse = {
  data?: {
    pinned?: boolean;
  };
  errors?: Array<Problem>;
};

export type ListUpdateRequest = {
  name?: string;
  private?: boolean;
  description?: string;
};

/**
 * A base32 pagination token.
 */
export type PaginationToken32 = string;

/**
 * A base36 pagination token.
 */
export type PaginationToken36 = string;

export type TweetHideResponse = {
  data?: {
    hidden?: boolean;
  };
};

export type BookmarkAddRequest = {
  tweet_id: TweetId;
};

/**
 * A response from deleting user-specified stream filtering rules.
 */
export type DeleteRulesRequest = {
  /**
   * IDs and values of all deleted user-specified stream filtering rules.
   */
  delete: {
    /**
     * IDs of all deleted user-specified stream filtering rules.
     */
    ids?: Array<RuleId>;

    /**
     * Values of all deleted user-specified stream filtering rules.
     */
    values?: Array<RuleValue>;
  };
};

/**
 * Expiration time of the download URL.
 */
export type DownloadExpiration = string;

export type Get2SpacesResponse = {
  data?: Array<Space>;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsResponse = {
  data?: Array<Tweet>;
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * The rule you have submitted is invalid.
 */
export type InvalidRuleProblem = Problem;

export type ListAddUserRequest = {
  user_id: UserId;
};

export type ListCreateResponse = {
  /**
   * A Twitter List is a curated group of accounts.
   */
  data?: {
    id: ListId;

    /**
     * The name of this List.
     */
    name: string;
  };
  errors?: Array<Problem>;
};

export type ListDeleteResponse = {
  data?: {
    deleted?: boolean;
  };
  errors?: Array<Problem>;
};

export type ListMutateResponse = {
  data?: {
    is_member?: boolean;
  };
  errors?: Array<Problem>;
};

export type ListPinnedResponse = {
  data?: {
    pinned?: boolean;
  };
  errors?: Array<Problem>;
};

export type ListUpdateResponse = {
  data?: {
    updated?: boolean;
  };
  errors?: Array<Problem>;
};

export type ReportUsersRequest = {
  user_ids: Array<UserId>;
  description: string;
};

export type TweetCreateRequest = {
  /**
   * Place ID being attached to the Tweet for geo location.
   */
  geo?: {
    place_id?: string;
  };

  /**
   * Poll options for a Tweet with a poll. This is mutually exclusive from Media and Quote Tweet Id.
   */
  poll?: {
    /**
     * The text of a poll choice.
     */
    options: Array<string>;

    /**
     * Settings to indicate who can reply to the Tweet.
     */
    reply_settings?: "following" | "mentionedUsers";

    /**
     * Duration of the poll in minutes.
     */
    duration_minutes: number;
  };
  text?: TweetText;

  /**
   * Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id and Poll.
   */
  media?: {
    /**
     * A list of Media Ids to be attached to a created Tweet.
     */
    media_ids: Array<MediaId>;

    /**
     * A list of User Ids to be tagged in the media for created Tweet.
     */
    tagged_user_ids?: Array<UserId>;
  };

  /**
   * Tweet information of the Tweet being replied to.
   */
  reply?: {
    in_reply_to_tweet_id: TweetId;

    /**
     * A list of User Ids to be excluded from the reply Tweet.
     */
    exclude_reply_user_ids?: Array<UserId>;
  };
  quote_tweet_id?: TweetId;

  /**
   * Settings to indicate who can reply to the Tweet.
   */
  reply_settings?: "following" | "mentionedUsers";

  /**
   * Link to take the conversation from the public timeline to a private Direct Message.
   */
  direct_message_deep_link?: string;

  /**
   * Exclusive Tweet for super followers.
   */
  for_super_followers_only?: boolean;
};

/**
 * User compliance data.
 */
export type UserComplianceData =
  | UserProtectComplianceSchema
  | UserUnprotectComplianceSchema
  | UserDeleteComplianceSchema
  | UserUndeleteComplianceSchema
  | UserSuspendComplianceSchema
  | UserUnsuspendComplianceSchema
  | UserWithheldComplianceSchema
  | UserScrubGeoSchema
  | UserProfileModificationComplianceSchema;

export type UserScrubGeoSchema = {
  scrub_geo: UserScrubGeoObjectSchema;
};

/**
 * Status of a compliance job.
 */
export type ComplianceJobStatus = "created" | "in_progress" | "failed" | "complete" | "expired";

export type Get2ListsIdResponse = {
  data?: List;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersByResponse = {
  data?: Array<User>;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdResponse = {
  data?: User;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersMeResponse = {
  data?: User;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type ListFollowedRequest = {
  list_id: ListId;
};

/**
 * A 'long' pagination token.
 */
export type PaginationTokenLong = string;

export type ReportUsersResponse = {
  data?: {
    id?: number;
  };
};

export type RulesLookupResponse = {
  data?: Array<Rule>;
  meta: RulesResponseMetadata;
};

export type RulesRequestSummary =
  | {
      /**
       * Number of valid user-specified stream filtering rules.
       */
      valid: number;

      /**
       * Number of user-specified stream filtering rules that were created.
       */
      created: number;

      /**
       * Number of invalid user-specified stream filtering rules.
       */
      invalid: number;

      /**
       * Number of user-specified stream filtering rules that were not created.
       */
      not_created: number;
    }
  | {
      /**
       * Number of user-specified stream filtering rules that were deleted.
       */
      deleted: number;

      /**
       * Number of user-specified stream filtering rules that were not deleted.
       */
      not_deleted: number;
    };

/**
 * Tweet compliance data.
 */
export type TweetComplianceData =
  | TweetDeleteComplianceSchema
  | TweetWithheldComplianceSchema
  | TweetDropComplianceSchema
  | TweetUndropComplianceSchema;

export type TweetCreateResponse = {
  data?: {
    id: TweetId;
    text: TweetText;
  };
  errors?: Array<Problem>;
};

export type TweetDeleteResponse = {
  data?: {
    deleted: boolean;
  };
  errors?: Array<Problem>;
};

/**
 * The rule you have submitted is a duplicate.
 */
export type DuplicateRuleProblem = Problem & {
  id?: string;
  value?: string;
};

export type Get2SpacesIdResponse = {
  data?: Space;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsIdResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type ListFollowedResponse = {
  data?: {
    following?: boolean;
  };
  errors?: Array<Problem>;
};

export type UserComplianceSchema = {
  user: {
    id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
};

/**
 * A problem that indicates this request is invalid.
 */
export type InvalidRequestProblem = Problem & {
  errors?: Array<{
    message?: string;
    parameters?: Record<string, Array<string>>;
  }>;
};

export type RulesResponseMetadata = {
  sent: string;
  summary?: RulesRequestSummary;
  next_token?: NextToken;

  /**
   * Number of Rules in result set.
   */
  result_count?: number;
};

export type TweetComplianceSchema = {
  tweet: {
    id: TweetId;
    author_id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
  quote_tweet_id?: TweetId;
};

/**
 * A problem that indicates your client is forbidden from making this request.
 */
export type ClientForbiddenProblem = Problem & {
  reason?: "official-client-forbidden" | "client-not-enrolled";
  registration_url?: string;
};

export type StreamingTweetResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type AddOrDeleteRulesRequest = AddRulesRequest | DeleteRulesRequest;

/**
 * A problem that indicates that a given Tweet, User, etc. does not exist.
 */
export type ResourceNotFoundProblem = Problem & {
  /**
   * Value will match the schema of the field.
   */
  value: string;
  parameter: string;
  resource_id: string;
  resource_type: "user" | "tweet" | "media" | "list" | "space";
};

/**
 * A problem that indicates that a usage cap has been exceeded.
 */
export type UsageCapExceededProblem = Problem & {
  scope?: "Account" | "Product";
  period?: "Daily" | "Monthly";
};

export type UsersLikesCreateRequest = {
  tweet_id: TweetId;
};

/**
 * A response from modifying user-specified stream filtering rules.
 */
export type AddOrDeleteRulesResponse = {
  /**
   * All user-specified stream filtering rules that were created.
   */
  data?: Array<Rule>;
  meta: RulesResponseMetadata;
  errors?: Array<Problem>;
};

export type BookmarkMutationResponse = {
  data?: {
    bookmarked?: boolean;
  };
  errors?: Array<Problem>;
};

/**
 * A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.
 */
export type FieldUnauthorizedProblem = Problem & {
  field: string;
  section: "data" | "includes";
  resource_type: "user" | "tweet" | "media" | "list" | "space";
};

export type Get2SpacesSearchResponse = {
  data?: Array<Space>;
  meta?: {
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type MuteUserMutationResponse = {
  data?: {
    muting?: boolean;
  };
  errors?: Array<Problem>;
};

/**
 * A problem that indicates the user's rule set is not compliant.
 */
export type NonCompliantRulesProblem = Problem;

export type UserScrubGeoObjectSchema = {
  user: {
    id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
  up_to_tweet_id: TweetId;
};

export type UsersLikesCreateResponse = {
  data?: {
    liked?: boolean;
  };
  errors?: Array<Problem>;
};

export type UsersLikesDeleteResponse = {
  data?: {
    liked?: boolean;
  };
  errors?: Array<Problem>;
};

export type BlockUserMutationResponse = {
  data?: {
    blocking?: boolean;
  };
  errors?: Array<Problem>;
};

/**
 * Your client has gone away.
 */
export type ClientDisconnectedProblem = Problem;

/**
 * A problem that indicates that the resource requested violates the precepts of this API.
 */
export type DisallowedResourceProblem = Problem & {
  section: "data" | "includes";
  resource_id: string;
  resource_type: "user" | "tweet" | "media" | "list" | "space";
};

export type Get2ListsIdTweetsResponse = {
  data?: Array<Tweet>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdMutingResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdTweetsResponse = {
  data?: Array<Tweet>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type TweetDropComplianceSchema = {
  drop: TweetComplianceSchema;
};

/**
 * A problem that indicates something is wrong with the connection.
 */
export type ConnectionExceptionProblem = Problem & {
  connection_issue?:
    | "TooManyConnections"
    | "ProvisioningSubscription"
    | "RuleConfigurationIssue"
    | "RulesInvalidIssue";
};

/**
 * A request to create a new batch compliance job.
 */
export type CreateComplianceJobRequest = {
  name?: ComplianceJobName;

  /**
   * Type of compliance job to list.
   */
  type: "tweets" | "users";

  /**
   * If true, this endpoint will return a pre-signed URL with resumable uploads enabled.
   */
  resumable?: boolean;
};

export type Get2ComplianceJobsResponse = {
  data?: Array<ComplianceJob>;
  meta?: {
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
};

export type Get2ListsIdMembersResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2SpacesIdBuyersResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2SpacesIdTweetsResponse = {
  data?: Array<Tweet>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * A problem that indicates a particular Tweet, User, etc. is not available to you.
 */
export type ResourceUnavailableProblem = Problem & {
  parameter: string;
  resource_id: string;
  resource_type: "user" | "tweet" | "media" | "list" | "space";
};

export type UserDeleteComplianceSchema = {
  user_delete: UserComplianceSchema;
};

export type UsersRetweetsCreateRequest = {
  tweet_id: TweetId;
};

export type CreateComplianceJobResponse = {
  data?: ComplianceJob;
  errors?: Array<Problem>;
};

export type Get2TweetsCountsAllResponse = {
  data?: Array<SearchCount>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    total_tweet_count?: Aggregate;
  };
  errors?: Array<Problem>;
};

export type Get2TweetsSearchAllResponse = {
  data?: Array<Tweet>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdBlockingResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdMentionsResponse = {
  data?: Array<Tweet>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 */
export type ResourceUnauthorizedProblem = Problem & {
  value: string;
  section: "data" | "includes";
  parameter: string;
  resource_id: string;
  resource_type: "user" | "tweet" | "media" | "list" | "space";
};

export type TweetDeleteComplianceSchema = {
  delete: TweetComplianceSchema;
};

export type TweetUndropComplianceSchema = {
  undrop: TweetComplianceSchema;
};

export type UserProtectComplianceSchema = {
  user_protect: UserComplianceSchema;
};

export type UserSuspendComplianceSchema = {
  user_suspend: UserComplianceSchema;
};

export type UsersFollowingCreateRequest = {
  target_user_id: UserId;
};

export type UsersRetweetsCreateResponse = {
  data?: {
    retweeted?: boolean;
  };
  errors?: Array<Problem>;
};

export type UsersRetweetsDeleteResponse = {
  data?: {
    retweeted?: boolean;
  };
  errors?: Array<Problem>;
};

export type Get2ComplianceJobsIdResponse = {
  data?: ComplianceJob;
  errors?: Array<Problem>;
};

export type Get2ListsIdFollowersResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdBookmarksResponse = {
  data?: Array<Tweet>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdFollowersResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdFollowingResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * You have been disconnected for operational reasons.
 */
export type OperationalDisconnectProblem = Problem & {
  disconnect_type?:
    | "OperationalDisconnect"
    | "UpstreamOperationalDisconnect"
    | "ForceDisconnect"
    | "UpstreamUncleanDisconnect"
    | "SlowReader"
    | "InternalError"
    | "ClientApplicationStateDegraded"
    | "InvalidRules";
};

/**
 * User compliance stream events.
 */
export type UserComplianceStreamResponse =
  | {
      data: UserComplianceData;
    }
  | {
      errors: Array<Problem>;
    };

export type UserTakedownComplianceSchema = {
  user: {
    id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
  withheld_in_countries: Array<CountryCode>;
};

export type UserUndeleteComplianceSchema = {
  user_undelete: UserComplianceSchema;
};

export type UserWithheldComplianceSchema = {
  user_withheld: UserTakedownComplianceSchema;
};

export type UsersFollowingCreateResponse = {
  data?: {
    following?: boolean;
    pending_follow?: boolean;
  };
  errors?: Array<Problem>;
};

export type UsersFollowingDeleteResponse = {
  data?: {
    following?: boolean;
  };
  errors?: Array<Problem>;
};

/**
 * Represents the data for the context annotation domain.
 */
export type ContextAnnotationDomainFields = {
  /**
   * The unique id for a context annotation domain.
   */
  id: string;

  /**
   * Name of the context annotation domain.
   */
  name?: string;

  /**
   * Description of the context annotation domain.
   */
  description?: string;
};

/**
 * Represents the data for the context annotation entity.
 */
export type ContextAnnotationEntityFields = {
  /**
   * The unique id for a context annotation entity.
   */
  id: string;

  /**
   * Name of the context annotation entity.
   */
  name?: string;

  /**
   * Description of the context annotation entity.
   */
  description?: string;
};

export type Get2UsersIdOwnedListsResponse = {
  data?: Array<List>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * Tweet compliance stream events.
 */
export type TweetComplianceStreamResponse =
  | {
      data: TweetComplianceData;
    }
  | {
      errors: Array<Problem>;
    };

export type TweetTakedownComplianceSchema = {
  tweet: {
    id: TweetId;
    author_id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
  quote_tweet_id?: TweetId;
  withheld_in_countries: Array<CountryCode>;
};

export type TweetWithheldComplianceSchema = {
  withheld: TweetTakedownComplianceSchema;
};

export type UserUnprotectComplianceSchema = {
  user_unprotect: UserComplianceSchema;
};

export type UserUnsuspendComplianceSchema = {
  user_unsuspend: UserComplianceSchema;
};

/**
 * A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.
 */
export type FilteredStreamingTweetResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;

  /**
   * The list of rules which matched the Tweet
   */
  matching_rules?: Array<{
    id: RuleId;
    tag?: RuleTag;
  }>;
};

export type Get2SpacesByCreatorIdsResponse = {
  data?: Array<Space>;
  meta?: {
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsCountsRecentResponse = {
  data?: Array<SearchCount>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    total_tweet_count?: Aggregate;
  };
  errors?: Array<Problem>;
};

export type Get2TweetsSampleStreamResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsSearchRecentResponse = {
  data?: Array<Tweet>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsSearchStreamResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdLikedTweetsResponse = {
  data?: Array<Tweet>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdPinnedListsResponse = {
  data?: Array<List>;
  meta?: {
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * Unique identifier of this User. The value must be the same as the authenticated user.
 */
export type UserIdMatchesAuthenticatedUser = string;

/**
 * Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.
 */
export type EntityIndicesInclusiveExclusive = {
  /**
   * Index (zero-based) at which position this entity ends.  The index is exclusive.
   */
  end: number;

  /**
   * Index (zero-based) at which position this entity starts.  The index is inclusive.
   */
  start: number;
};

/**
 * Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.
 */
export type EntityIndicesInclusiveInclusive = {
  /**
   * Index (zero-based) at which position this entity ends.  The index is inclusive.
   */
  end: number;

  /**
   * Index (zero-based) at which position this entity starts.  The index is inclusive.
   */
  start: number;
};

export type Get2TweetsIdLikingUsersResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsIdQuoteTweetsResponse = {
  data?: Array<Tweet>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsIdRetweetedByResponse = {
  data?: Array<User>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsFirehoseStreamResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2TweetsSample10StreamResponse = {
  data?: Tweet;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersIdFollowedListsResponse = {
  data?: Array<List>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

/**
 * A problem that indicates that the authentication used is not supported.
 */
export type UnsupportedAuthenticationProblem = Problem;

export type Get2UsersIdListMembershipsResponse = {
  data?: Array<List>;
  meta?: {
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type Get2UsersByUsernameUsernameResponse = {
  data?: User;
  errors?: Array<Problem>;
  includes?: Expansions;
};

export type UserProfileModificationObjectSchema = {
  user: {
    id: UserId;
  };

  /**
   * Event time.
   */
  event_at: string;
  new_value: string;
  profile_field: string;
};

export type UserProfileModificationComplianceSchema = {
  user_profile_modification: UserProfileModificationObjectSchema;
};

export type Get2UsersIdTimelinesReverseChronologicalResponse = {
  data?: Array<Tweet>;
  meta?: {
    newest_id?: NewestId;
    oldest_id?: OldestId;
    next_token?: NextToken;
    result_count?: ResultCount;
    previous_token?: PreviousToken;
  };
  errors?: Array<Problem>;
  includes?: Expansions;
};
