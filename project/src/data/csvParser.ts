import { Achiever } from '../types';

// Mock data for demonstration - replace with actual CSV data
const mockAchievers: Achiever[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    achievement: 'Top Ticket Resolver',
    description: 'Resolved 2,847 tickets with 98.5% customer satisfaction rating and fastest response time',
    category: 'Tickets',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '2,847 tickets',
    period: 'Q4 2024',
    ranking: 1
  },
  {
    id: '2',
    name: 'Michael Chen',
    achievement: 'Call Champion',
    description: 'Handled 1,534 calls with average resolution time of 3.2 minutes and 97% satisfaction',
    category: 'Calls',
    profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '1,534 calls',
    period: 'Q4 2024',
    ranking: 1
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    achievement: 'Customer Satisfaction Star',
    description: 'Achieved 99.2% satisfaction rating across 1,892 tickets with exceptional problem-solving skills',
    category: 'Tickets',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '1,892 tickets',
    period: 'Q4 2024',
    ranking: 2
  },
  {
    id: '4',
    name: 'David Kim',
    achievement: 'Speed Dialer Excellence',
    description: 'Fastest average call resolution at 2.8 minutes per call with high customer satisfaction',
    category: 'Calls',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '1,203 calls',
    period: 'Q4 2024',
    ranking: 2
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    achievement: 'Technical Issue Expert',
    description: 'Specialized in complex technical tickets with 95% first-call resolution rate',
    category: 'Tickets',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '1,456 tickets',
    period: 'Q4 2024',
    ranking: 3
  },
  {
    id: '6',
    name: 'Robert Martinez',
    achievement: 'Volume Leader',
    description: 'Handled the highest call volume with 2,103 successful interactions and consistent quality',
    category: 'Calls',
    profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    metric: '987 calls',
    period: 'Q4 2024',
    ranking: 3
  }
];

export const parseCSVData = async (csvUrl?: string): Promise<Achiever[]> => {
  // If no CSV URL provided, return mock data
  if (!csvUrl) {
    return mockAchievers;
  }

  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    console.log('🔍 Raw CSV text:', csvText.substring(0, 500) + '...');
    
    // Parse CSV data
    const lines = csvText.trim().split('\n');
    console.log('🔍 Total lines:', lines.length);
    const headers = lines[0].split(',').map(h => h.trim());
    console.log('🔍 Headers found:', headers);
    
    const achievers: Achiever[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      console.log(`🔍 Row ${i} values:`, values);
      const row: Record<string, string> = {};
      headers.forEach((header, idx) => {
        row[header] = values[idx] || '';
      });
      console.log(`🔍 Row ${i} mapped:`, row);
      // Skip empty rows (all fields empty)
      if (Object.values(row).every(v => v === '')) {
        console.log(`🔍 Skipping empty row ${i}`);
        continue;
      }
      const achiever = {
        id: row['id'] || `achiever-${i}`, // id: Used as the unique key for each achiever card in the UI
        name: row['name'] || 'Unknown',
        achievement: row['achievement'] || 'Achievement',
        description: row['description'] || 'Description',
        category: (row['category'] as 'Tickets' | 'Calls') || 'Tickets',
        profileImage: row['profileImage'] || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        metric: row['metric'] || '', // metric: Shown as the main performance number (e.g., "2,847 tickets")
        period: row['period'] || '', // period: Displayed as the time period for the achievement
        ranking: row['ranking'] ? parseInt(row['ranking']) : undefined, // ranking: Used for sorting and medal display, but not required
        avgSatisfaction: row['avgSatisfaction'] ? parseFloat(row['avgSatisfaction']) : undefined, // NEW: dedicated column
        avgResolutionTime: row['avgResolutionTime'] ? parseFloat(row['avgResolutionTime']) : undefined // NEW: dedicated column
      };
      console.log(`🔍 Parsed achiever ${i}:`, achiever);
      achievers.push(achiever);
    }
    
    console.log('🔍 Final parsed achievers:', achievers);
    return achievers;
  } catch (error) {
    console.error('Error fetching CSV data:', error);
    return mockAchievers;
  }
};

// Add this function to fetch data from Google Sheets
export const fetchGoogleSheetsData = async (sheetId: string, sheetName: string = 'Sheet1'): Promise<Achiever[]> => {
  const csvUrl = `https://docs.google.com/spreadsheets/d/1ABCDEF1234567890xyz/gviz/tq?tqx=out:csv&sheet=Sheet1`;

  return parseCSVData(csvUrl);
};  