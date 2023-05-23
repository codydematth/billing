export interface IRequest {
    url: string;
    method?: 'POST' | 'PUT' | 'DELETE' | 'GET';
    data?: any;
    headers?: Record<string, string>;
}
