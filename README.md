 Supporting Someone After Stroke

A mobile-first web guide designed to help families and caregivers communicate more effectively with someone recovering from a stroke.

This guide focuses on practical communication strategies, reducing frustration, supporting engagement, and providing clear everyday interaction techniques. The content is presented in a structured, easy-to-read mobile format that can be accessed during stressful moments.

## Purpose

This tool was built to address real challenges caregivers face:

- PDFs are difficult to use on mobile devices
- Caregivers need simple reference tools they can access quickly
- Guidance should be easy to share with other family members
- Content should be readable during stressful moments when attention is limited

The guide provides structured communication strategies based on caregiver experience and general recovery research, formatted for mobile readability.

## Features

- Mobile-first design optimized for readability on phones
- Structured communication strategies organized by situation
- Practical guidance for handling resistance and difficult moments
- Shareable web format accessible from any device
- Simple, calm UI appropriate for healthcare context
- JSON-driven content structure
- Reusable component architecture

## Project Structure

```
/
├── src/
│   ├── components/       # UI building blocks
│   │   ├── GuideLayout.tsx
│   │   ├── Section.tsx
│   │   ├── StrategyCard.tsx
│   │   ├── SituationCard.tsx
│   │   └── ShareButton.tsx
│   ├── data/            # Guide content
│   │   └── strokeSupport.json
│   ├── App.tsx          # Main application
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── vercel.json          # Deployment configuration
```

## How Content Works

Guide content is stored as structured JSON in `src/data/strokeSupport.json` rather than being hardcoded in components. This approach provides several benefits:

- Content updates require no code changes
- Structure remains consistent across the guide
- Content can be reused or adapted for future guides
- Clear separation between presentation and content

Components read from the JSON file and render the content using a consistent visual structure.

## Development

### Requirements

- Node.js 18 or higher

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment

This application is deployed using Vercel with the following configuration:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

The `vercel.json` file includes routing configuration to handle single-page application behavior.

## Updating Content

To update guide content, edit the file:

```
src/data/strokeSupport.json
```

The JSON file contains all guide text including:

- Introduction and disclaimer
- Core principles
- Communication strategies
- Situation-specific guidance
- Final reminders

Update text in this file rather than modifying components. Changes will automatically appear in the application.

## Design Approach

The design prioritizes:

- Mobile readability with appropriate text sizing and spacing
- Calm, healthcare-appropriate visual styling
- Minimal decorative elements to maintain focus on content
- Content clarity over visual complexity

Colors, typography, and layout are chosen to reduce cognitive load and maintain readability during stressful situations.

## Project Status

Initial version focused on delivering one structured caregiver guide for post-stroke communication support.

## License

Private project
