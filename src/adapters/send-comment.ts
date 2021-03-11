import { API_URL } from "./endpoints";

export function SEND_COMMENT_FETCH_CONFIG(
  photoId: number,
  body: { comment: string },
  token: string
) {
  return {
    url: API_URL + `/api/comment/${photoId}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}
