# Docs - Modern Document Management System

A modern, responsive document management system built with Next.js and shadcn/ui components. This application provides a seamless experience for creating, editing, and managing documents with a beautiful user interface.

## Features

-   📱 Responsive design with mobile support
-   📝 Rich text document editor
-   🎨 Modern UI with shadcn/ui components
-   🚀 Built with Next.js 14
-   🎯 TypeScript support
-   🎭 Custom hooks for enhanced functionality

## Tech Stack

-   **Framework:** Next.js 15
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Icons:** Lucide Icons
-   **Language:** TypeScript

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd docs
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── documents/      # Document management pages
│   └── layout.tsx      # Root layout
├── components/         # React components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
└── lib/               # Utility functions
```

## Development

-   Run development server: `pnpm dev`
-   Build for production: `pnpm build`
-   Start production server: `pnpm start`
-   Lint code: `pnpm lint`
