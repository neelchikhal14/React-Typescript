export interface FetchResponseI {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type ResultType = null | FetchResponseI[];
export type ErrorType = null | string;
export type SendRequestType = () => Promise<void>;
