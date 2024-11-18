import { PaginatedResponse, Story } from "@/types";

/**
 * Get all stories by room id
 * 
 * @param roomId uuid
 * @returns Promise<PaginatedResponse<Story>>
 */
export async function getStoriesByRoomId(roomId: string): Promise<PaginatedResponse<Story>> {
  const params = new URLSearchParams();
  params.set('roomId', roomId)
  params.set('_limit', '50')
  params.set('_page', '1')


  const response = await fetch(`${import.meta.env.VITE_API_URL}/stories?${params.toString()}`);
  return await response.json();
}

/**
 * Create a new story
 * 
 * @param payload Story
 * @returns 
 */
export async function createStory(payload: Story) {
  return await fetch(`${import.meta.env.VITE_API_URL}/stories`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
}

/**
 * Update a story
 * 
 * @param payload Story
 * @returns 
 */
export async function updateStory(payload: Story) {
  return await fetch(`${import.meta.env.VITE_API_URL}/stories/${payload.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
}

/**
 * Delete a story
 * 
 * @param id The id of the story to delete
 * @returns 
 */
export async function deleteStory(id: string) {
  return await fetch(`${import.meta.env.VITE_API_URL}/stories/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  });
}
