import { DataResponse, Vote } from "@/types";

export async function getVotesByStoryId(storyId: string): Promise<DataResponse<Vote>> {
  const params = new URLSearchParams();
  params.set('storyId', storyId)

  const response = await fetch(`${import.meta.env.VITE_API_URL}/votes?${params.toString()}`);
  return await response.json();
}