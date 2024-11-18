export const VALID_VOTES = ['?', 1, 2, 3, 5, 8, 13] as const;
export type ValidVotes = typeof VALID_VOTES[number];

export type PaginatedResponse<DataType> = {
  data: DataType[];
  page_size: number;
  page_number: number;
  total: number;
};

export type DataResponse<DataType> = {
  data: DataType[];
}

export type User = {
  id: string;
  name: string;
  email: string;
}

export type Room = {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
};

export type Story = {
  id: string;
  name: string;
  storyPoint?: ValidVotes | null;
  roomId: string;
};

export type Vote = {
  id: string;
  userId: string;
  storyId: string;
  vote: ValidVotes;
};
