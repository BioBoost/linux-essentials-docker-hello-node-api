# Build Stage
FROM node:12.19.0-alpine3.12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Deploy Stage
FROM node:12.19.0-alpine3.12 as production-stage
WORKDIR /app
COPY --from=build-stage /app /app
COPY . .

# Launch the application
CMD npm start