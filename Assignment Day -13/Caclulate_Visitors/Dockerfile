# Base Image
FROM node:alpine

# Work Directory
WORKDIR /app

# Copying package json
COPY package.json ./

# Install dependencies 
RUN npm install

# Copying all other files 
COPY ./ ./

# Startup Cmd
CMD ["npm", "start"]