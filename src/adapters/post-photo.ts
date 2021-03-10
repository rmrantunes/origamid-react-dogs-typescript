import { API_URL } from "./endpoints";

export function POST_PHOTO_FETCH_CONFIG(formData: FormData, token: string) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      body: formData,
    },
  };
}
