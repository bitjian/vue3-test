import { AxiosRequestConfig } from 'axios';
declare namespace axiosAgent {
  interface PendingTask {
    config: AxiosRequestConfig;
    resolve: Function;
  }
}
export = axiosAgent;
export as namespace axiosAgent;
