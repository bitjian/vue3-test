interface Window {
  refreshFlag: Boolean;
  taskList: axiosAgent.PendingTask[];
  utils: {
    refreshToken: () => void
  }
}

interface MResponse<T> {
  code: string;
  message: string;
  data: T;
  [key: string]: any;
}
interface CList {
  cid: number,
  cname: string
}
interface SList {
  sid: number,
  sname: string,
  cid: number,
  ghost?: boolean,
  color?: string
}
type ApiResponse<T> = Promise<[any, MResponse<T> | undefined]>;
type ApiResponse<T> = Promise<[any, MResponse<T>]>;
interface MReq {
  [key: string]: unknown;
}