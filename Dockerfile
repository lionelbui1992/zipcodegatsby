# Stage 1: Base image with native dependencies and pnpm
FROM node:20-alpine AS base
WORKDIR /app

# Install native dependencies and compilation tools required for sharp/gatsby
RUN apk add --no-cache libc6-compat g++ make py3-pip

# Install pnpm
RUN npm install -g pnpm

# Copy package configuration files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./

# Install all dependencies
RUN pnpm install

# Stage 2: Development stage
FROM base AS development
# Copy all source files
COPY . .
ENV NODE_ENV=development
# Expose Gatsby develop default port
EXPOSE 8000
# Run Gatsby in development mode and listen on all interfaces
CMD ["pnpm", "exec", "gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]

# Stage 3: Builder stage for production static generation
FROM base AS builder
# Copy application source code
COPY . .
ARG SITE_URL
ARG WPGRAPHQL_URL
ENV SITE_URL=${SITE_URL}
ENV WPGRAPHQL_URL=${WPGRAPHQL_URL}
ENV NODE_ENV=production

# Build the Gatsby static site
RUN pnpm run build

# Prune development dependencies to keep the production build lightweight
RUN pnpm prune --prod

# Stage 4: Production runner stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built artifacts from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/gatsby-config.js ./gatsby-config.js
COPY --from=builder /app/.cache ./.cache
COPY --from=builder /app/node_modules ./node_modules

# Expose Gatsby's default serve port
EXPOSE 9000

# Start Gatsby serve and bind to all interfaces
CMD ["pnpm", "exec", "gatsby", "serve", "-H", "0.0.0.0", "-p", "9000"]
