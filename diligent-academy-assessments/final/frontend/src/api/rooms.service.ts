import { PaginatedResponse, Room } from '@/types';

/**
 * Get all rooms
 * 
 * @param page Page number
 * @param search Fulltext search query
 * @returns Promise<PaginatedResponse<Room>>
 */
export async function getRooms(page = 1, search?: string): Promise<PaginatedResponse<Room>> {
  const params = new URLSearchParams();
  params.set('_limit', '5')
  page && params.set('_page', `${Number(page) || 1}`)
  search && params.set('q', search)

  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms?${params.toString()}`);
  return await response.json();
}

/**
 * Create a new room
 * 
 * @param payload
 */
export async function createRoom(payload: Pick<Room, 'name'>) {
  await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
}
