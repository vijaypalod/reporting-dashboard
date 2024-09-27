export{}
// import HttpClient, { ArrayResponse, AxiosClient, BaseResponse } from "../api";
// import { BASE_URL, GET_USERS, LOGIN } from "../api/url";
// // import json from "../data/indicators_data.json";
// import { UserData } from "../store/user";
// import axios from "axios";

// const apiClient: HttpClient = new AxiosClient();

// export type Login = {
//     email: string;
//     password: string;
// };

// export const initiateLogin = (body: Login) => {
//     const isMockEnabled = false;

//     if (isMockEnabled) {
//         return Promise.resolve<BaseResponse<ArrayResponse<Login>>>({
//             isSuccessful: true,
//             data: json.data as any,
//             message: "",
//             code: 200,
//         });
//     } else {
//         return apiClient.post<Login, Login & { userId: number }>({
//             url: LOGIN,
//             body,
//         });
//     }
// };

// export const getUserConfig = (): Promise<BaseResponse<UserData>> => {
//     const isMockEnabled = false;

//     if (isMockEnabled) {
//         return Promise.resolve<any>({
//             isSuccessful: true,
//             data: {},
//             message: "",
//             code: 200,
//         });
//     } else {
//         return apiClient.get<UserData>({ url: GET_USERS });
//     }
// };

// export const initiateLogout = () =>
//     apiClient.post({
//         url: "/logout",
//     });
