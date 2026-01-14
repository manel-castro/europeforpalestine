FROM node:20-alpine AS build
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src ./src
# Install all deps (including dev) to run the TypeScript compiler
RUN npm install --legacy-peer-deps

# Build TypeScript
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY package.json ./
# Copy only the built artifacts from the build stage
COPY --from=build /app/dist ./dist
# Install production dependencies only
RUN npm install --omit=dev --production --legacy-peer-deps || true

ENV NODE_ENV=production
EXPOSE 4200
CMD ["node", "dist/index.js"]
