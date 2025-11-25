#!/bin/sh
set -e

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  pnpm install
fi

# Start the watcher in the background if it exists
if [ -f "watcher.js" ]; then
  echo "Starting watcher..."
  node watcher.js &
  WATCHER_PID=$!
fi

# Start the Next.js development server
echo "Starting Next.js development server..."
exec pnpm run dev --hostname 0.0.0.0 --port 3000