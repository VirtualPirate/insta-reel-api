FROM node:21

WORKDIR /app

COPY . .

COPY package-lock.json .

RUN npm ci

EXPOSE 8080

CMD ["npm", "run", "start"]

