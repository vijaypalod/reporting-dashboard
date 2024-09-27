export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("Base url not specified");
}

export const GET_OTP = "/users/otp"

