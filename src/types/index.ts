export interface ErrorResponse {
  message: string;
  status: number;
  code?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
