import { RequestStatusEnum } from '/@enums/httpEnum';

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  [x: string]: any;
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  //  Whether to process the request result
  isTransformRequestResult?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // ignore error
  ignoreError?: boolean;
  // join loading modal
  joinLoading?: boolean;
}

export interface Result<T = any> {
  status: RequestStatusEnum;
  message: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Record<string, any>;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
