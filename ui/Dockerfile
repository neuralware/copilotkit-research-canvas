FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && \
    FORCE_COLOR=1 PNPM_YES=true pnpm install

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]