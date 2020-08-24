export interface JwtResponse {
  id?: number;
  email?: string;
  name?: string;
  roles?: any;
  accessToken?: string;
  tokenType?: string
}
