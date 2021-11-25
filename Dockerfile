FROM node:16.13.0-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Launch the application
CMD npm start