FROM node:18-alpine AS build

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]

FROM node:18-alpine AS dev

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
