# Sunday Miles

## Current State

The Sunday Miles website is a single-page application with:
- Hero section with title, description, and "Book Now" button
- Event details section showing date, time, location, and price
- Booking section with quantity selector and total price calculator
- After Run Activities section featuring Pickleball and Fresh Natural Juices
- Current WhatsApp redirect uses generic URL without phone number
- No images in any section

## Requested Changes (Diff)

### Add

- Hero section: High-quality realistic image of diverse runners in early morning with energetic vibe
- Event details section: Image of group running together
- After Run Activities - Pickleball: Image of people playing pickleball
- After Run Activities - Juices: Image of Indian and African people drinking natural juices

### Modify

- All booking button redirects to use specific WhatsApp number: https://wa.me/916356551952
- All WhatsApp links to open in new tab
- Apply redirect change to:
  - Hero "BOOK NOW" button
  - Booking section "BOOK NOW" button

### Remove

None

## Implementation Plan

1. Generate four high-quality realistic images using the generate_image tool
2. Update App.tsx to:
   - Display images in their respective sections
   - Fix all button WhatsApp redirects to use the specific phone number
   - Ensure new tab behavior for all WhatsApp links

## UX Notes

- Images should enhance the modern, vibrant, and professional aesthetic
- Layout and text content remain unchanged
- All booking buttons (hero, booking section) should redirect to the same WhatsApp number
