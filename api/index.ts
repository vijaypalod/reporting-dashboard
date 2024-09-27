/* eslint-disable max-len */
import axios, { AxiosInstance } from "axios";
import Router from "next/router";

import { BASE_URL } from "./url";

type PostParams<T> = {
    url: string;
    query?: Record<string, any>;
    body?: T;
};

export type GetParams = {
    url: string;
    query?: Record<string, any>;
};

type UpdateParams<T> = {
    url: string;
    query?: Record<string, any>;
    body?: T;
};

type DeleteParams = {
    url: string;
    query?: Record<string, any>;
};

export type ArrayResponse<T> = {
    docs: T;
    totalCount: number;
};

export type BaseResponse<T> = {
    code: number;
    message: string;
    isSuccessful: boolean;
    data: T;
};

interface HttpClient {
    get: <R = any>(params: GetParams) => Promise<BaseResponse<R>>;
    post: <T = any, R = any>(params: PostParams<T>) => Promise<BaseResponse<R>>;
    update: <T = any, R = any>(
        params: UpdateParams<T>,
    ) => Promise<BaseResponse<R>>;
    delete: <R = any>(params: DeleteParams) => Promise<BaseResponse<R>>;
}

export class AxiosClient implements HttpClient {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            timeout: 30000,
            withCredentials: true,
        });

        this.client.interceptors.response.use((response) => {
            if (response.status === 401) {
                Router.push("/");
            }

            return response;
        });
    }

    static createInstance() {
        return new AxiosClient();
    }

    async get<R = any>(params: GetParams): Promise<BaseResponse<R>> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
            let response: BaseResponse<R>;

            try {
                let r;
                if (params.query) {
                    r = await this.client.get(params.url, {
                        params: params.query,
                    });
                } else {
                    r = await this.client.get(params.url);
                }

                response = {
                    data: r.data.data,
                    code: r.data.code,
                    message: r.data.message,
                    isSuccessful: true,
                };
            } catch (e: any) {
                response = {
                    data: {} as R,
                    code: e.response.data?.code || 500,
                    message: e.response.data?.message || "Something went wrong",
                    isSuccessful: false,
                };
            }
            res(response);
        });
    }

    async post<T = any, R = any>(
        params: PostParams<T>,
    ): Promise<BaseResponse<R>> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
            let response: BaseResponse<R>;

            try {
                const r = await this.client.post(params.url, params.body, {
                    params: params.query,
                });

                response = {
                    data: r.data.data,
                    code: r.data.code,
                    message: r.data.message,
                    isSuccessful: true,
                };
            } catch (e: any) {
                response = {
                    data: {} as R,
                    code: e.response.data?.code || 500,
                    message: e.response.data?.message || "Something went wrong",
                    isSuccessful: false,
                };
            }
            res(response);
        });
    }

    async delete<R = any>(params: DeleteParams): Promise<BaseResponse<R>> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
            let response: BaseResponse<R>;

            try {
                const r = await this.client.delete(params.url, {
                    params: params.query,
                });

                response = {
                    data: r.data.data,
                    code: r.data.code,
                    message: r.data.message,
                    isSuccessful: true,
                };
            } catch (e: any) {
                response = {
                    data: {} as R,
                    code: e.response.data?.code || 500,
                    message: e.response.data?.message || "Something went wrong",
                    isSuccessful: false,
                };
            }
            res(response);
        });
    }

    async update<T = any, R = any>(
        params: UpdateParams<T>,
    ): Promise<BaseResponse<R>> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
            let response: BaseResponse<R>;

            try {
                const r = await this.client.put(params.url, params.body, {
                    params: params.query,
                });

                response = {
                    data: r.data.data,
                    code: r.data.code,
                    message: r.data.message,
                    isSuccessful: true,
                };
            } catch (e: any) {
                response = {
                    data: {} as R,
                    code: e.response.data?.code || 500,
                    message: e.response.data?.message || "Something went wrong",
                    isSuccessful: false,
                };
            }
            res(response);
        });
    }
}

export default HttpClient;







// type CallApiParams = {
//     url: string;
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE';
//     onSuccessfullApiResponse: () => void;
//     onInvalidApiResponse: () => void;
//     payload?: object;
// };

// export const callApi = (params: CallApiParams) => {
//     const { url, payload = {}, method, onSuccessfullApiResponse, onInvalidApiResponse } = params;
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onreadystatechange = () => {
//         if ((xhr.readyState === 4 && xhr.status >= 200) || xhr.status <= 299) {
//             onSuccessfullApiResponse();
//         } else {
//             onInvalidApiResponse();
//         }
//     };

//     // Sends the request
//     if (Object.keys(payload).length) {
//         xhr.send(JSON.stringify(payload));
//     } else {
//         xhr.send();
//     }
// };


