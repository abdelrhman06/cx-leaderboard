# CX Team Top Achievers Showcase

A professional web application showcasing the top achievers in the Customer Experience team for both Tickets and Calls categories.

## Features

- **Dynamic Data Loading**: Integrates with Google Sheets CSV data
- **Interactive Filtering**: Filter by All, Tickets, or Calls categories
- **Smooth Animations**: Professional entrance and hover animations
- **Responsive Design**: Optimized for all device sizes
- **Power BI Integration**: Direct link to analytics dashboard

## Google Sheets Integration

To connect your Google Sheets data:

1. Create a Google Sheet with the following columns:
   - Column A: ID (unique identifier)
   - Column B: Name (achiever's name)
   - Column C: Achievement (title/achievement name)
   - Column D: Description (detailed description)
   - Column E: Category (either "Tickets" or "Calls")
   - Column F: Profile Image URL (link to profile picture)
   - Column G: Metric (key performance metric)
   - Column H: Period (time period, e.g., "Q4 2024")

2. Publish your Google Sheet as CSV:
   - Go to File → Share → Publish to web
   - Select "Comma-separated values (.csv)"
   - Copy the generated URL

3. Update the CSV URL in `src/data/csvParser.ts`:
   ```typescript
   const csvUrl = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE';
   const data = await parseCSVData(csvUrl);
   ```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling
- CSV parsing for Google Sheets integration

## Customization

- Update the Power BI dashboard URL in `src/components/PowerBISection.tsx`
- Modify the color scheme in the Tailwind configuration
- Add more filter categories by updating the `FilterType` type
- Customize animations by modifying the CSS animations