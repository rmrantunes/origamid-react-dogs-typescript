import { API_URL } from "./endpoints";

interface GetPhotosFetchConfigProps {
  page: number;
  total: number;
  /** user = 0 if you want to fetch all users' photos */
  user: number;
}

export function GET_PHOTOS_FETCH_CONFIG({
  page,
  total,
  user,
}: GetPhotosFetchConfigProps) {
  return {
    url: API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
