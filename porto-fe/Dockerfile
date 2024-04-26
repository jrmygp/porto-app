FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@10.6.0

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]