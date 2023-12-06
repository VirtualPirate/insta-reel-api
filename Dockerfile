FROM --platform=linux/x86_64 node:18-slim

RUN apt update
RUN apt install libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev libasound2 -y

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]

