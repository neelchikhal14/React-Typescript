import { FetchResponseI } from "./types";

export default async function _fetchImages(
  pageNumber: number
): Promise<FetchResponseI[]> {
  const response: Response = await fetch(
    `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`
  );

  if (response.status !== 200)
    throw new Error("An error has occured while fetching the images");
  return await response.json();
}
