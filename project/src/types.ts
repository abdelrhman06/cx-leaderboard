export interface Achiever {
  id: string;
  name: string;
  achievement: string;
  description: string;
  category: 'Tickets' | 'Calls';
  profileImage: string;
  metric: string;
  period: string;
  ranking?: number; // Optional ranking field for top achievers
  avgSatisfaction?: number; // Optional: average satisfaction for Tickets
  avgResolutionTime?: number; // Optional: average resolution time for Calls
}

export type FilterType = 'All' | 'Tickets' | 'Calls';