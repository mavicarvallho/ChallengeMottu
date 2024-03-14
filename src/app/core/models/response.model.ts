export interface ResponseModel<T> {
  results: T;
  info: ResponseInfo;
}

interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
