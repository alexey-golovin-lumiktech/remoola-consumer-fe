import { OpenAPI } from "@/generated/api";

/** Configure the generated client to send cookies (no tokens). */
export function configureOpenAPI() {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  OpenAPI.WITH_CREDENTIALS = true;
  OpenAPI.CREDENTIALS = "include";
}

// export function configureOpenAPIWithToken(token: string) {
//   OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
//   OpenAPI.WITH_CREDENTIALS = true;
//   OpenAPI.CREDENTIALS = "include";
//   OpenAPI.TOKEN = () => token;
// }