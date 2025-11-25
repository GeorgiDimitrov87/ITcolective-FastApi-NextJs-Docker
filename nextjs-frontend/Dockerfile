FROM node:20-bookworm

# Set the working directory
WORKDIR /app

# Install pnpm globally and dos2unix
RUN apt-get update && apt-get install -y dos2unix && \
    npm install -g pnpm && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Fix line endings and permissions for start.sh
RUN dos2unix /app/start.sh && chmod +x /app/start.sh

# Set proper permissions for node user
RUN chown -R node:node /app

# Switch to non-root user
USER node

EXPOSE 3000

# Start the application
CMD ["/app/start.sh"]