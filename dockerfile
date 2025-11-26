# 1. Base Image (Node.js)
FROM node:22-alpine

# 2. App Directory
WORKDIR /app

# 3.install Dependencies
COPY package.json .
RUN npm install

# 4. Copy App Source Code
COPY . .

# 5.Expose Port (Vite Default Port)
EXPOSE 5173

# 6. Run the Application
CMD ["npm", "run", "dev", "--", "--host"]