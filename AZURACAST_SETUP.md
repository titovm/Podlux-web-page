# AzuraCast Integration Setup

Your internet radio player has been updated to integrate with AzuraCast's Now Playing API. The song title, artist name, and album artwork will now update automatically every 15 seconds.

## Configuration Required

Open `src/App.tsx` and update these constants with your actual AzuraCast details:

```typescript
const AZURACAST_BASE_URL = 'https://your-azuracast-site.example.com';
const STATION_SHORTCODE = 'station_shortcode';
```

### How to find your values:

1. **AZURACAST_BASE_URL**: Your AzuraCast installation URL (e.g., `https://radio.yoursite.com`)
2. **STATION_SHORTCODE**: Either:
   - The station's abbreviated name (e.g., `azuratest_radio` for "AzuraTest Radio")
   - The numeric ID of the station (visible in the URL when managing the station)

## What's Changed

### Dynamic Data Updates
- **Song Title & Artist**: Now fetched from AzuraCast API and updated automatically
- **Album Art**: Dynamically loaded from the API response
- **Stream URL**: Automatically obtained from the station configuration

### API Integration
- Polls the AzuraCast Now Playing API every 15 seconds (recommended interval)
- Uses the Standard Now Playing API endpoint: `/api/nowplaying/{station_shortcode}`
- Gracefully handles errors by keeping the last known values
- Falls back to default values if the API is unavailable

### Data Structure
The app expects the following AzuraCast API response structure:

```json
{
  "now_playing": {
    "song": {
      "title": "Song Title",
      "artist": "Artist Name",
      "art": "https://url-to-album-art.jpg"
    }
  },
  "station": {
    "listen_url": "https://stream-url"
  }
}
```

## Testing

1. Update the configuration constants with your AzuraCast details
2. Run the development server: `npm run dev`
3. Open the app in your browser
4. The song information should update automatically as tracks change

## Alternative API Endpoints

If you experience performance issues, you can switch to the Static JSON endpoint by updating the fetch URL:

```typescript
`${AZURACAST_BASE_URL}/api/nowplaying_static/${STATION_SHORTCODE}.json`
```

This uses a cached file that's updated every few seconds, reducing server load.

## Troubleshooting

### CORS Issues
If you encounter CORS errors in the browser console:
1. Ensure your AzuraCast installation allows requests from your domain
2. Check the "Prefer Browser URL" setting in your AzuraCast installation
3. Consider using a proxy if running locally

### No Updates
- Verify the API endpoint URL is correct
- Check browser console for error messages
- Confirm your station is broadcasting and the API is accessible
- Test the API directly in your browser: `https://your-site.com/api/nowplaying/your_station`

## Design Preservation

The visual design remains completely unchanged. All layout, typography, colors, and positioning are preserved exactly as they were.
