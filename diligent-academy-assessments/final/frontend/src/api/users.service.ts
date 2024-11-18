import { PaginatedResponse, User } from "@/types";

/**
 * Get all users
 * 
 * @returns Promise<PaginatedResponse<User>>
 */
export async function getUsers(): Promise<PaginatedResponse<User>> {
  const params = new URLSearchParams();
  params.set('_limit', '500')
  params.set('_page', '1')


  const response = await fetch(`${import.meta.env.VITE_API_URL}/users?${params.toString()}`);
  return await response.json();
}

/**
 * Create a new user
 * 
 * @param payload User
 * @returns Promise
 */
export async function createUser(payload: User) {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
}
