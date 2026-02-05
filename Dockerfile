# Dockerfile for Next.js application

# 1. Builder Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# 2. Runner Stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy the standalone output from the builder
COPY --from=builder /app/.next/standalone ./
# Copy the public and static folders
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Change ownership to the non-root user
RUN chown -R nextjs:nodejs .

# Set the user
USER nextjs

# Expose the port the app runs on
EXPOSE 3100


# Start the server
CMD ["npm", "run","dev"]
