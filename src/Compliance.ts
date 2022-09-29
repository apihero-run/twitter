import {
  CreateComplianceJobRequest,
  CreateComplianceJobResponse,
  Error,
  Get2ComplianceJobsIdResponse,
  Get2ComplianceJobsResponse,
  TweetComplianceStreamResponse,
  UserComplianceStreamResponse,
  ApiHeroEndpoint,
} from "./@types";

/** 


* List Compliance Jobs
* Returns recent Compliance Jobs for a given job type and optional job status
* @param type - Type of Compliance Job to list.
* @param [status] - Status of Compliance Job to list.
* @param [complianceJobFields] - A comma separated list of ComplianceJob fields to display. 
*/
export const listBatchComplianceJobs: ApiHeroEndpoint<
  {
    type: "tweets" | "users";
    status?: "created" | "in_progress" | "failed" | "complete";
    complianceJobFields?: Array<
      | "created_at"
      | "download_expires_at"
      | "download_url"
      | "id"
      | "name"
      | "resumable"
      | "status"
      | "type"
      | "upload_expires_at"
      | "upload_url"
    >;
  },
  Get2ComplianceJobsResponse | Error
> = {
  id: "listBatchComplianceJobs",
  clientId: "twitter",
};

/** 


* Create compliance job
* Creates a compliance for the given job type 
*/
export const createBatchComplianceJob: ApiHeroEndpoint<
  { job: CreateComplianceJobRequest },
  CreateComplianceJobResponse | Error
> = {
  id: "createBatchComplianceJob",
  clientId: "twitter",
};

/** 


* Get Compliance Job
* Returns a single Compliance Job by ID
* @param id - The ID of the Compliance Job to retrieve.
* @param [complianceJobFields] - A comma separated list of ComplianceJob fields to display. 
*/
export const getBatchComplianceJob: ApiHeroEndpoint<
  {
    id: string;
    complianceJobFields?: Array<
      | "created_at"
      | "download_expires_at"
      | "download_url"
      | "id"
      | "name"
      | "resumable"
      | "status"
      | "type"
      | "upload_expires_at"
      | "upload_url"
    >;
  },
  Get2ComplianceJobsIdResponse | Error
> = {
  id: "getBatchComplianceJob",
  clientId: "twitter",
};

/** 


* Tweets Compliance stream
* Streams 100% of compliance data for Tweets
* @param partition - The partition number.
* @param [backfillMinutes] - The number of minutes of backfill requested.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided. 
*/
export const getTweetsComplianceStream: ApiHeroEndpoint<
  { partition: number; backfillMinutes?: number; startTime?: string; endTime?: string },
  TweetComplianceStreamResponse | Error
> = {
  id: "getTweetsComplianceStream",
  clientId: "twitter",
};

/** 


* Users Compliance stream
* Streams 100% of compliance data for Users
* @param partition - The partition number.
* @param [startTime] - YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.
* @param [endTime] - YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.
* @param [backfillMinutes] - The number of minutes of backfill requested. 
*/
export const getUsersComplianceStream: ApiHeroEndpoint<
  { partition: number; startTime?: string; endTime?: string; backfillMinutes?: number },
  UserComplianceStreamResponse | Error
> = {
  id: "getUsersComplianceStream",
  clientId: "twitter",
};