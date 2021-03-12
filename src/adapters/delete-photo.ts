import { API_URL } from "./endpoints";

export function DELETE_PHOTO_FETCH_CONFIG(photoId: number, token: string) {
  return {
    url: API_URL + `/api/photo/${photoId}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
