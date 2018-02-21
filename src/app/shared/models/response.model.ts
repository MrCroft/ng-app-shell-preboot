export interface IApiPayload {
  total?: number;
  items?: any[];
  item?: any;
}

export interface IApiResponse {
  success: boolean;
  payload?: IApiPayload;
  error?: any;
}
